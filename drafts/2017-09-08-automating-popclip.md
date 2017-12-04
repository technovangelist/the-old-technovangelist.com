---
title: Automating Popclip
date: 2017-09-08T21:51:05-07:00
draft: true
---

[[add pic of instapaper annotation]]
I use [Instapaper][1] almost every day. When reading my news feeds, I will often send things to Instapaper because I don't have time right now, but I do want to read the article in a more active way. I love the fact that I can annotate what I read in Instapaper. Unfortunately, I sometimes have a little fight on my hands when I do. Instapaper opens a popup menu and so does [PopClip][2]. Whichever one I want is usually covered by the other. Thankfully, using Alfred, I was quickly able to automate how all of this works. 

## PopClip???
So first, PopClip is another tool I use many times every day. When I select a word or phrase, PopClip opens a little popup menu no matter what application I am using. The actions on the menu are totally customizable, and there are hundreds of actions you can download from their site. Some of the actions I have configured include being able to search for that phrase on Google, being able to create a new Todoist (a wonderful task manager) task with the text selected, and using that text to create a new snippet in [Typinator][3] (a superior alternative to Text Expander).

## The old workflow
But when I am on Instapaper and select a word or phrase to annotate, I get a popup from Instapaper and another from PopClip. Usually PopClip is sitting on top of the one from Instapaper. So now I have to select the text multiple times to be able to see the right popup. The solution to this problem is to open the PopClip menu bar icon and choose to disable the tool. When I am done in Instapaper, find that icon again and re-enable PopClip. But that's is just enough to be a touch annoying. 

## AppleScript to the rescue
Thankfully, PopClip can be automated with [AppleScript][4]. I am not a fan of AppleScript. Compared to other options like Javascript, Python, Swift, etc, AppleScript is hard to use and extremely inconsistent. But I don't really need to do all that much and [the code is provided on the PopClip website][5]:

```
tell application "PopClip"
	set enabled to not enabled
end tell
```

You don't have to know much about AppleScript or PopClip to see what's going on here. The script has a block that is going to do something to PopClip. PopClip knows about a variable called enabled. If enabled is true, then PopClip should be running. If it's false, make sure it's stopped. `not enabled` is the opposite of whats in `enabled`. So if it was true, now it's false. So how do I run it?

## Ahhhh, Alfred
Another tool I use all the time is [Alfred][6]. Along with all the amazing application launching capabilities offered by Alfred, it can also run workflows that can include running an AppleScript script as one of it's steps.

## The solution
So to create the PopClip Toggle workflow, just open Alfred's options, and create a new workflow. Give the workflow a name, I chose PopClip Toggle, then click Create. Right click on the canvas and choose to add a Keyword Input. I chose pt for my keywork, standing for PopClip Toggle. Change the dropdown to `No Argument`. Enter a Title, like `PopClip Toggle` and click **Save**. 

Right click again on the canvas and choose the **Run NSAppleScript** action. You saw the PopClip sample code above. but I want to make sure i get some sort of status message saying that it is on or not. So I wrapped it with a little extra code:

```
on alfred_script(q)
  tell application "PopClip" 
	set enabled to not enabled
  	if enabled then
	  return "PopClip is Enabled"
	else
	  return "PopClip is Disabled"
	end if
  end tell
end alfred_script
```

All it's really doing in addition to the original code is reporting the current status of the app after the switch. The output then gets fed to the next step which is a Post Notification. 

Now when I am reading on Medium or Instapaper and want to annotate something, I can quickly disable PopClip and annotate away. I use this all the time. 

[1]: instapaper url!!!
[2]: popclip url!!!
[3]: typinator url!!!
[4]: aplescript url
[5]: the applescript code on popclip site
[6]: alfred url