---
author: nitheeshkl
comments: true
date: 2013-07-22 17:36:35+00:00
layout: post
link: https://klnitheesh.wordpress.com/2013/07/22/path-separator-plugin-for-apaches-activemq/
slug: path-separator-plugin-for-apaches-activemq
title: Path separator plugin for Apache's ActiveMQ
wordpress_id: 34
categories:
- Tech
tags:
- activemq
- mqtt
- web
---

ActiveMQ is one of the popular open source messaging and integration patterns server. It supports many cross language clients and protocols. One of it's feature is the auto-mapping between multiple protocols.But one might encounter issues when using multiple clients with stomp and mqtt protocols with ActiveMQ when dealing with path separators for topics.

The "DestinationPathDescriptorPlugin", is an activemq plugin that can be used to resolve the issues.

**What is this plugin for ?**

Consider this scenario. Two clients, one using stomp and other using mqtt protocol, need to communicate through a common topic named "foo/bar" using ActiveMQ as the message broker.

The stomp clients uses "/topic/foo/bar" for the topic name and the mqtt client uses "foo/bar". This is well and good according to the standards of each protocol. ActiveMQ on the server side, converts the path separator of mqtt from "/" to ".", for making it compatible with JMS as JMS uses "." for path separator, but doesn't convert the path separator of stomp and keeps it as "/" itself.The end result is that there are two different topics created, "/topic/foo/bar" and "foo.bar", on the server side and because of this, the two clients will not be able to communicate with each other. But what is required would be the creation of a single topic and for activemq to automatically map both the stomp and mqtt to the same topic so the clients can communicate successfully.

Although, this seems a bit contradictory to the activemq's feature, one might face this issue in reality and scarcely fathom what might be the problem. One simple solution would be to use the "DestinationPathDescriptorPlugin" provided by activemq, which allows clients to use custom path separator. By using this, whatever be the path separator used by the clients, on the server side the path separator that would be used is the one that is defined by the plugin. By default, the plugin provides "/" as the path separator.

So, in our scenario, whether the mqtt client is using "/" or "." as the path separator and the stomp client is using "/" as the path separator, on the server side the topic created would use "/" as the path separator and hence a single topic would be created and now both the clients can successfully communicate with each other.

**How to get the plugin**

The plugin comes bundled by default with the activemq package (at least with versions >=5.6).

To use the plugin, simply add the following into your activemq.xml conf file. (This by default uses "/" as the destination path separator)

```xml 
    <broker>  
       .......  
       <plugins>  
          ........  
          <destinationPathSeparatorPlugin/>  
       </plugins>  
     </broker>  
    </code>
```

**Extra info**

According to the official documentation, this should be added last if you want it to be working properly with other plugins.

For more details visit, [http://activemq.apache.org/wildcards.html ](http://activemq.apache.org/wildcards.html%C2%A0)


