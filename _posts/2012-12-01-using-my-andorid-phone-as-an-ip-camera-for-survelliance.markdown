---
author: nitheeshkl
comments: true
date: 2012-12-01 18:07:58+00:00
layout: post
link: https://klnitheesh.wordpress.com/2012/12/01/using-my-andorid-phone-as-an-ip-camera-for-survelliance/
slug: using-my-andorid-phone-as-an-ip-camera-for-survelliance
title: 'Using my Andorid phone as an IP camera for Survelliance '
wordpress_id: 41
categories:
- Tech
tags:
- android
- camera
---



Recently I got a new android phone for myself unexpectedly. I already had one earlier and now i was wondering what i would with the two phones. I just didn't want to give away the older android phone so i began to wonder what use i can put the old phone to. Many ideas came to mind but the one i found most interesting was to somehow make it work like ip camera and see whats happening on my laptop and other devices connected on my network.








So me being an android developer, all excited with the idea, hastily started off with building an app to steam the video from the phone. After a few lines of code i came to senses and thought may be i should look out if any such apps were already available. And not so surprisingly there were. Among the few i found the best one was "IP Webcam". It did exactly what i wanted, stream the video feed form the phones camera over a network. It worked very well and satisfied the requirements i had initially but i was missing the whole joy of me getting to code and my code doing something.








After a few tries, the whole setup became boring. There was just one frame on my laptop with the video feed from the camera and nothing much special about it.So I thought I'll put more liveliness to it by sending notifications when something happens...in this case, i wanted notification when some one came near the phone so that I'd now know that there is someone/something near my phone and now the video feed would be good to see. A simple notification like "There is something/someone in front of the phone. Want to see it- yes/no?".








This time i knew i had to code and wouldn't find something this customized on-line. My plan was to use the proximity sensor on the phone to detect some presence and use tcp/ip sockets to send a notification to my system. This would be my client and a small sever code on the laptop would be listening and when it gets this msg from phone would pop up a notification with "yes / no" and on "yes" would open up the video stream. Something similar to this.

[![2012-12-02-094352_1366x768_scrot](http://klnitheesh.files.wordpress.com/2014/06/2012-12-02-094352_1366x768_scrot.png?w=300)](http://klnitheesh.files.wordpress.com/2014/06/2012-12-02-094352_1366x768_scrot.png)

[![2012-12-02-095136_1366x768_scrot](http://klnitheesh.files.wordpress.com/2014/06/2012-12-02-095136_1366x768_scrot.png?w=300)](http://klnitheesh.files.wordpress.com/2014/06/2012-12-02-095136_1366x768_scrot.png)

So, the first piece of the puzzle is to setup a simple server-client communication between the phone and the laptop. The few lines of simple java code does the job





client:



```java    
    public class CameraClient { 
        public static void main (String args[]) 
        {// arguments supply message and hostname of destination  
            Socket s = null; 
            try{ 
              int serverPort = 6880;
                  
              s = new Socket("localhost", serverPort); 
              DataOutputStream output = new DataOutputStream( s.getOutputStream()); 
              
                  //send some data
                  System.out.println("sending data");
                  output.writeInt(6);
            }
            catch (UnknownHostException e){ 
                System.out.println("Sock:"+e.getMessage());}
            catch (EOFException e){
                System.out.println("EOF:"+e.getMessage()); }
            catch (IOException e){
                System.out.println("IO:"+e.getMessage());} 
            finally {
                  if(s!=null) 
                      try {s.close();
                      } 
                      catch (IOException e) {/*close failed*/}
        }
      }
    } 
```



Server:



```java 
    public class CameraServer { 
        public static boolean notify = false;
      public static void main (String args[]) 
      { 
        try{ 
                int serverPort = 6880; 
                ServerSocket listenSocket = new ServerSocket(serverPort); 
                System.out.println("server start listening... ... ...");
                while(true) { 
                    Socket clientSocket = listenSocket.accept(); 
                    Connection c = new Connection(clientSocket); 
                } 
        } 
        catch(IOException e) {
            System.out.println("Listen :"+e.getMessage());} 
      }
    }
    
    class Connection extends Thread { 
        DataInputStream input; 
        Socket clientSocket; 
        String clientIP="";
    
        public Connection (Socket aClientSocket) { 
            try { 
                        clientSocket = aClientSocket; 
                        input = new DataInputStream( clientSocket.getInputStream()); 
                        InetAddress i = clientSocket.getInetAddress();
                        if(i !=null){
                            clientIP = i.toString().substring(1);
                            System.out.println("connected to " + clientIP);
                        }
                        this.start(); 
            } 
                catch(IOException e) {
                System.out.println("Connection:"+e.getMessage());
                } 
          } 
    
          public void run() { 
            try { // an echo server 
                  //Step 1 read length
                  int nb = input.readInt();
                  System.out.println("Got notification "+ nb);
                  //Step 2 read byte
                   
                if(CameraServer.notify == true){
                    System.out.println("Notification in progress...");
                    return;
                }
    
                CameraServer.notify = true;
                JDialog.setDefaultLookAndFeelDecorated(true);
                   int response = JOptionPane.showConfirmDialog(null, 
                   "There seems to be some activity in sector1.\nDo you want to see video feed?",
                   "Confirm",
                    JOptionPane.YES_NO_OPTION, JOptionPane.QUESTION_MESSAGE);
                if (response == JOptionPane.NO_OPTION) {
                        System.out.println("No button clicked");
                    CameraServer.notify = false;
                } else if (response == JOptionPane.YES_OPTION) {
                    System.out.println("Yes button clicked");
                   CameraServer.notify = false;
    
                   Runtime run = Runtime.getRuntime();
                   Process pr = run.exec("/usr/bin/cvlc \"http://"+clientIP+":8080/videofeed\"");
                } else if (response == JOptionPane.CLOSED_OPTION) {
                    System.out.println("JOptionPane closed");
                        CameraServer.notify = false;
                }
                  
            } 
                catch(EOFException e) {
                System.out.println("EOF:"+e.getMessage()); } 
                catch(IOException e) {
                System.out.println("IO:"+e.getMessage());}  
       
                finally { 
                  try { 
                      clientSocket.close();
                  }
                  catch (IOException e){/*close failed*/}
                }
            }
    }
```

The server listens on a particular port and for every connection, spawns a thread, give a notification and if "yes" is clicked opens up the video feed in vlc.

The next part was to interface with the proximity sensor on the phone. That's pretty simple and lots of examples on-line like the following code snippet from [http://android-er.blogspot.in/2011/09/monitor-proximity-sensor.html](http://android-er.blogspot.in/2011/09/monitor-proximity-sensor.html)

```java 
    SensorManager mySensorManager;
     Sensor myProximitySensor;
    
        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.main);
            ProximitySensor = (TextView)findViewById(R.id.proximitySensor);
            ProximityMax = (TextView)findViewById(R.id.proximityMax);
            ProximityReading = (TextView)findViewById(R.id.proximityReading);
           
            mySensorManager = (SensorManager)getSystemService(
              Context.SENSOR_SERVICE);
            myProximitySensor = mySensorManager.getDefaultSensor(
              Sensor.TYPE_PROXIMITY);
           
            if (myProximitySensor == null){
             ProximitySensor.setText("No Proximity Sensor!");
            }else{
             ProximitySensor.setText(myProximitySensor.getName());
             ProximityMax.setText("Maximum Range: "
               + String.valueOf(myProximitySensor.getMaximumRange()));
             mySensorManager.registerListener(proximitySensorEventListener,
               myProximitySensor,
               SensorManager.SENSOR_DELAY_NORMAL);
            }
        }
       
        SensorEventListener proximitySensorEventListener
        = new SensorEventListener(){
    
      @Override
      public void onAccuracyChanged(Sensor sensor, int accuracy) {
       // TODO Auto-generated method stub  
      }
    
      @Override
      public void onSensorChanged(SensorEvent event) {
       if(event.sensor.getType()==Sensor.TYPE_PROXIMITY){
        ProximityReading.setText("Proximity Sensor Reading:"
          + String.valueOf(event.values[0]));
       }
      }
        };
    }
```

Ha, with that done the only thing left to do was to glue it up all together and put some android specific code and configurations to make the sensor app run in background and send notification on sensor events. Works beautifully now. Although the proximity sensor on the phone ain't that great. May be in time i shall hook up a proper sensor and interface it with the phone. But never mind that, for me my old phone is again useful in a new cool way and I had my cup of joy for a Sunday.

I shall upload the project in my github profile soon for others to access.




