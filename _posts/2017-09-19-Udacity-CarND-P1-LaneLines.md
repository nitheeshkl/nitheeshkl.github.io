---
title: 'Udacity CarND P1 - Lane line detection'
updated: 2017-09-19 09:15:20+00:00
slug: udacity-carnd-p1-lane-lines
author: nitheeshkl
comments: true
excerpt: Udacity Sefl-driving car nano-degree program's first project - to detect lane lines on road
layout: post
categories:
- Tech
tags:
- opencv
- python
- udacity
---


# Finding Lane Lines on the Road

This is my result of the first project in the Udacity's [Self-Driving Car
Nano-degree](https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013) program.

![Lane Line detection](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/result.jpg)

## Overview
The goal of the project is to build a pipeline to detect lanes on the road in a given video stream.

* The detected lane lines must be overlayed on the input video stream
* The lane detection should work for all the variant of road condition(straight,curved,shaded..etc) in the given video streams.

## Reflection / Steps

The resulting pipeline consists of 6 steps as described below.

### step1: convert to gray scale

We first convert our image into gray scale to make rest of the processing easier
as we dont have to deal with all colors on the image. we're only interested in
the white & yello images. **cv2.cvtColor** function is used for this.

|Original|Grayed|
|![original](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/original.jpg)|![grayed](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/gray.jpg)|

### step2: blur the image

The next step is to smoothen the image by bluring it using Gaussian blur
(**cv2.GaussianBlur**)

|Grayed|Blured|
|![grayed](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/gray.jpg)|![blured](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/blur.jpg)|

### step3: detect edges

From the blured image, we apply Canny's edge detection to extract the edges in
the image using **cv2.Canny** function

|Blured|Edges|
|![blured](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/blur.jpg)|![edges](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/canny.jpg)|

### step4: mask the region of interest

The lane lines of our interest appear only in a specific region of the image. we
mask rest of the image and keep only this area of interest.

|Edges|Masked|
|![edges](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/canny.jpg)|![masked](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/masked.jpg)|

### step5: detect lines

In the interested region of the image, we apply _Hough line transformation_ to
detected lines using **cv2.HoughLinesP** function.

|Masked|Hough Lines|
|![masked](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/masked.jpg)|![hough lines](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/all_hough_lines.jpg)|

### step6: identify lane lines

From the detected hough lines, we extract only those lines that match with the
angle/slope of lane lines and ignore the rest of the detected lines.

|Hough Lines|Lane Lines|
|![hough lines](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/all_hough_lines.jpg)|![lane lines](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/all_lane_lines.jpg)|

Since there would be several partial lines detected from the above step, we
extrapolate them to define the left & right lane lines. I use linear regression
to extrapolate the lines.

|Lane Lines|Extrapolated Lane Lines|
|![lane lines](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/all_lane_lines.jpg)|![extrapolated lines](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/extrapolated_hough_lines.jpg)|

Once we have the extrapolate lane lines, we then merge this on the original
image.

|Extrapolated Lane Lines|Result|
|![extrapolated lines](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/extrapolated_hough_lines.jpg)|![result](https://raw.githubusercontent.com/nitheeshkl/Udacity_CarND_LaneLines_P1/master/test_images_output/result.jpg)|


## Results

<iframe width="560" height="315" src="https://www.youtube.com/embed/UvBzj9iGTLQ" frameborder="0" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_h6XMgBvPmA" frameborder="0" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_3c7Qq5UP7w" frameborder="0" allowfullscreen></iframe>

## Shortcomings

The following are some of the shortcoming of this basic pipeline

* This pipeline works only in an ideal scenario of straight roads with good lane
  markings
* Curved regions are not handled since only a straight line extrapolation is
  done
* If the lane markings are spaced too widely, the pipeline will fail
* If the lane color is not in contract with the road/surroundings, the pipeline
  will fail to identify them
* this pipeline only handles RGB colorspace.

## Possible improvements

some of the possible improvement that immediately stike to my mind

* improve the line detection by performing a color threshold. (lane lines are
  presumed to be only in white or yellow)
* processing the image only in RGB color space might be able to detect lanes
  marking in all conditions(ex: shadowed region...etc). Therefore, using
  HSL/HSV to process the image could lead to better detection.
* Detecting curved lines is required as compared to detecting only straight
  lines

## Conclusion
As seen above, the implemented pipeline is pretty basic and fails with most of
the real life scenarios. Going forward in the course, I'll learn better ways to
improve this pipeline.

You can find this basic pipeline implementation at my github repo
[here](https://github.com/nitheeshkl/Udacity_CarND_LaneLines_P1)


