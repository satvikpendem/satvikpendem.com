# Apps

I frequently use multiple platforms, such as Windows, macOS, Linux, iOS, Android, and web, for various tasks that require each platform. These are the best apps in terms of productivity, efficiency, and fun, for each system that are also relatively unknown:

# Windows

## [SmoothVideoProject](https://www.svp-team.com/) (**paid**, free trial)
This transforms any video into smooth 60 frames per second, or even higher should your monitor and hardware support it. I use a 240 hz monitor so movies and shows become literally 10 times smoother, as the standard for visual media is usually 24 FPS.

Here are examples with anime and live-action:

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Wjb6CSe4708" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2Ds7EcJ2Ia4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## [TaskbarX](https://chrisandriessen.nl/taskbarx) (**free**, [open source](https://github.com/ChrisAnd1998/TaskbarX))

This centers your taskbar icons and also creates a blur or transparent effect:

<img src="https://store-images.s-microsoft.com/image/apps.42889.14166628836155948.44d37036-7873-452a-80e0-6129a9f3af99.4041d508-beb6-4294-b4c8-eecb203ab924?w=1399&h=787&q=90&format=jpg">

## [PowerToys](https://github.com/microsoft/PowerToys) (**free**, open source)

This is made by a Microsoft team for Windows 10 that has many different types of utilities in it, such as a color picker, bulk renamer, File Explorer addons, and more. Specifically, there is one called [FancyZones](https://aka.ms/PowerToysOverview_FancyZones) which is amazing for productivity. You can set up various zones on the screen and place your applications there, and they will stay there across desktops. You can save and reload these configurations as well.

<img src="https://raw.githubusercontent.com/wiki/microsoft/PowerToys/images/fancyzones/WindowEditor.png">

For macOS, there is a similar application called [Stay](https://apps.apple.com/us/app/stay/id435410196?mt=12) (**paid**), although I don't use it myself. I use [Divvy](#divvy-paid-with-free-trial) instead.

## [mpc-hc](https://github.com/clsid2/mpc-hc/releases) (**free**, [open source](https://github.com/clsid2/mpc-hc))

This is a video player that can handle many video formats. I use it with [SVP4](#smoothvideoproject-paid-free-trial). There is also a plugin called [madVR](http://madvr.com/) which upscales content quite well, making 720p look like 1080p, and 1080p look (almost) like native 4k.

<img src="https://www.ghacks.net/wp-content/uploads/2019/12/media-player-classic-home-cinema-1.9.0-dark-theme.png?width=1200&enable=upscale">

## [SMPlayer](https://www.smplayer.info/) (**free**, open source)

This is another media player, but it has the special quality of being mpv-based. I watch to a lot of lectures, listen to audiobooks and podcasts at 4x speed, but at this speed there's a lot of distortion. However, there are some settings in mpv which can counter-act this and make it sound natural, just like in Edge, Chrome, or Firefox (Safari suffers from this issue as well unfortunately). These settings are adding a `scaletempo` audio filter with the following properties:

`scaletempo=stride=30:overlap=.50:search=10`

<img src="https://www.smplayer.info/images/screenshots/smplayer_skin_modern3.png">

# macOS

## [SmoothVideoProject](https://www.svp-team.com/) (**paid**, free trial)
[See above](#smoothvideoproject-paid-one-time-payment-with-free-trial)

## [Divvy](https://mizage.com/divvy/) (**paid**, free trial)

This app allows you to lay out your windows on-screen in a simple way.

<img src="https://mizage.com/divvy/screenshots/Divvy2-thumb.png">

Divvy is also available for Windows but since I use [PowerToys](#powertoys-free), I don't need it on Windows.

## [Macs Fan Control](https://crystalidea.com/macs-fan-control) (**free**, optional paid features)

I have a MacBook Pro and sometimes it thermal throttles, meaning that rather than turn on the fans due to the loud noise they make, it would rather slow down the computer, which can be quite annoying if you're doing anything intensive. This app allows you to manually change the fan speed and set presets.

<img src="https://crystalidea.com/assets/images/macs-fan-control/carousel2_mac.png">

There are other alternatives like [TG Pro](https://www.tunabellysoftware.com/tgpro/) (**paid** with free trial) that provide more detailed features such as custom fan speed curves.

## [Rectangle](https://github.com/rxhanson/Rectangle) (**free**, open source)

This divides up windows using keyboard shortcuts, similar to other window managers that you may have used. I only use this for a single shortcut, however, as I use [Divvy](#divvy-paid-with-free-trial) for everything else. This shortcut is *maximize the current window to fit the screen*: ⇧⌥↩. macOS has an annoying habit of not maximizing, much as Windows would, when double clicking a window title bar, so I use this shortcut instead.

<img src="https://user-images.githubusercontent.com/13651296/71896594-7cdb9280-3154-11ea-83a7-70b71c6df9d4.png">

## [iGlance](https://github.com/iglance/iGlance) (**free**, open source)

I want to keep track of my computer's performance and temperature since I work on demanding tasks so that it doesn't overheat and thermal throttle. This combined with [Macs Fan Control](#macs-fan-control-free-with-optional-paid-features) is a powerful combination.

<img src="https://raw.githubusercontent.com/iglance/iGlance/master/readme_images/Menubar_Preview.jpg">

## [gSwitch](https://github.com/CodySchrank/gSwitch) (**free**, open source)

My MacBook Pro, like many Macs, has two types of graphics. To save power and extend battery life, it uses an integrated graphical processing unit (GPU) which is slow but long lasting. For demanding tasks, it uses a discrete GPU, which can suck up battery but provides a lot of power. Sometimes, however, macOS doesn't automatically switch between them, due to whatever reason, so gSwitch forces it to use one or the other. Note that if you plug in an external display, macOS always uses the discrete GPU, so this app isn't that useful then, but if you're not using an external monitor, this app is very useful.

<img src="https://mac-cdn.softpedia.com/screenshots/gSwitch_1.png">

## [Witch](https://manytricks.com/witch/) (**paid**, free trial)

When you ⌘ ↹, macOS will switch applications and not windows, unlike Windows, and even all applications at that, not even ones with windows currently open. This can make switching between windows very annoying. There is the option to use ⌘ ↹ and the Up and Down arrow keys to cycle between windows of the selected app, but that can get cumbersome.

Witch instead makes the macOS behavior more like Windows, with ⌥ ↹ acting like Alt-Tab, switching open windows rather than apps. There is actually even more customization, with switching between open browser tabs, switching between windows on other monitors, and so on.

<img src="https://manytricks.com/witch/images/4/switch_windows_big.jpg">

<img src="https://manytricks.com/witch/images/4/multiswitch_big.png">

## [AdGuard](https://AdGuard.com/en/welcome.html) (**paid**, subscription)

AdGuard is a computer-wide adblocker which works not only in web browsers but also in native desktop apps like Spotify. It's not as good as a network-wide solution like DNS blocking ([which AdGuard provides](https://adguard.com/en/adguard-dns/overview.html)) or [Pi-hole](https://pi-hole.net/), but it gets the job done. AdGuard is also available for Windows, iOS and Android, which I use.

<img src="https://i.imgur.com/jfHWQzC.png" style="width: 300px;">

## [coconutBattery](https://www.coconut-flavour.com/coconutbattery/) (**free**, optional paid features)

In macOS Sierra in 2017, Apple removed a way to see battery time remaining in the menubar. This adds that back and also gives some extra information about battery health and capacity left. You can even look at the battery info of other Apple devices in your network, like an iPad in another room.

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px;">
  <img src="https://www.coconut-flavour.com/coconutbattery/assets/img/3.9_menubar-lossless.png">
  <img src="https://www.coconut-flavour.com/coconutbattery/assets/img/3.9_ios_selector_plus_blue.png">
</div>

## [ItsyCal](https://www.mowglii.com/itsycal/) (**free**, [open source](https://github.com/sfsam/Itsycal))

On Windows, if you click the date/time, it'll show a calendar which is very useful. macOS doesn't do this, so this is an app that shows a calendar. It can also replace the time, not just the date, but I've opted not to, personally.

<img src="https://www.rawinfopages.com/mac/sites/default/files/sites/default/files/img17/itsycal-2.jpg">

## [iina](https://iina.io/) (**free**, [open source](https://github.com/iina/iina))

iina is a native macOS video player that can handle a lot of video formats, as well as audio. It is mpv-based so it can do the same voice distortion counter-action as [SMPlayer](#smplayer-free-open-source), see that section for more details.

<img src="https://iina.io/images/sc-sky.png">

## [Parallels](https://www.parallels.com/) (**paid**, subscription)

I usually use all three desktop operating systems, Windows, macOS, and Linux, as well as iOS and Android, due to doing app development via a framework called [Flutter](https://flutter.dev), developed by Google. It allows one codebase that can work on the platforms above as well as a website version. To test these, then I'd need access all of the platforms. I do this through an app called Parallels.

Parallels is a virtual machine app meaning it can run multiple OS at the same time, so you can put Windows in one window or monitor and macOS in another. It even has a coherence mode where on the same screen, you can switch between apps of different OS, such as working on a Windows-version Excel spreadsheet while doing research in Safari.

What is particularly special about Parallels is that it has native GPU acceleration for any number of VMs, meaning it passes through a virtual GPU to each VM. In general, if you want to run a GUI on a VM, as in see applications on the screen rather than just a command line, you need a separate GPU for each VM. If I wanted to replicate running Windows, macOS, and Linux simultaneously in three different windows, I'd need a Linux computer with at least three GPUs, one for each OS. This is because Windows doesn't support GPU passthrough at all in virtual machines, unlike Parallels, and Linux can, but you need a special GPU that has virtual GPU support, and these are usually in the 4 or 5 figure range (USD) in cost because these types of setups are usually used in data centers. However, macOS supports this in a normal consumer computer, which is quite surprising and is the reason I use macOS primarily.

<img src="https://cdn.arstechnica.net/wp-content/uploads/2016/08/Win10-Win8-and-Win7-in-Parallels-Desktop-12.jpg">

# Linux

## [SmoothVideoProject](https://www.svp-team.com/) (**paid**, free trial)
[See above](#smoothvideoproject-paid-one-time-payment-with-free-trial)

## [i3](https://i3wm.org/) (**free**, [open source](https://github.com/i3/i3))

Ever wanted to customize your desktop to the max, or like they do in the movies? Check out window managers, such as i3. Now, the picture below is not the default configuration, you'll have to do a lot of customizing to get it. Check out [/r/unixporn](https://reddit.com/r/unixporn) for more details.

<img src="https://preview.redd.it/m3b2o493wrg51.png?width=682&auto=webp&s=2d5a9b6211f89c14f591e36ed17f478518d909e6">

## [Onivim 2](https://www.onivim.io/) (**paid**, [open source after 18 months after release](https://github.com/onivim/oni2))

This is an alternative to VSCode. Onivim is a powerful text editor (currently still in alpha) that runs on Vim but also provides a nice GUI with integration into VSCode extensions. Best of all, it's not based on Electron so it loads in less than a second and only takes up double digit megabytes of RAM.

<img src="https://user-images.githubusercontent.com/4527949/85928449-0c980900-b87b-11ea-9f6a-06907d4f6d80.png">

## Command line apps (**free**)

This is a catch-all for the various command line applications that are useful in Linux.

- [`exa`](https://github.com/ogham/exa) (Rust) - `ls` replacement
- [`ripgrep`](https://github.com/BurntSushi/ripgrep) (Rust) - `grep` replacement, one of the fastest
- [`fd`](https://github.com/sharkdp/fd) (Rust) - `find` replacement
- [`fzf`](https://github.com/junegunn/fzf) (Go) - fuzzy finder, use with `fd` or `ripgrep`
- [`bat`](https://github.com/sharkdp/bat) (Rust) - `cat` replacement, with syntax highlighting, git integration and more.
- [`zoxide`](https://github.com/ajeetdsouza/zoxide) (Rust) - `z` replacement, autojump to directories without typing out their full path
- [`ytop`](https://github.com/cjbassi/ytop) (Rust) - `top` replacement, with nice graphs

# Android

## [AdGuard](https://adguard.com/en/welcome.html) (**paid**, subscription)

[See above](#adguard-paid-subscription)

## [Voice Audiobook Player](https://play.google.com/store/apps/details?id=de.ph1b.audiobook&hl=en_US) (**free**, [open source](https://github.com/PaulWoitaschek/Voice))

This is a great audiobook player that is simple yet powerful enough, with a good UI. Best of all, you can use your own audio files instead of some DRM-laden service.

There is also a [forked version](https://github.com/BrandonOCasey/Voice/releases) that I use that allows the reader to listen at higher than 2.5x speed, which is the limit in the official version, which the creator doesn't want to increase for some reason.

<img src="https://lh3.googleusercontent.com/6E-KN0f9wdARYfwjnCYxbYLhbX46zl4SCtSSaAFPwztocr5Kar8XJJ-FqOJ6e1nRKaI=w1920-h983">

## [AntennaPod](https://antennapod.org/) (**free**, [open source](https://github.com/antennapod/AntennaPod))

This is a full featured podcast player with features such as automatic downloading when new episodes come in, 

It is also the only one I've found that can go up to 4x speed, most stop at 3x only.

<img src="https://antennapod.org/assets/img/screenshot1.png">

## [Tachiyomi](https://tachiyomi.org/) (**free**, [open source](https://github.com/inorichi/tachiyomi))

This is a comic/manga/webtoon reader that can download them locally when there's no Internet access. It has a lot of different sources that you can access via plugins.

<img src="https://tachiyomi.org/assets/Library-Dark.png">

## [Google Camera Ports](https://www.celsoazevedo.com/files/android/google-camera/) (**free**)

Did you know you can get the same quality as Pixel phones on your own Android phone? That's because most of the quality of photos taken from Pixels are all in software, so if you have the same Google Camera app, the quality will be similar.

[Follow the directions](https://www.celsoazevedo.com/files/android/google-camera/how-to/) to make it work on your own phone.

<img src="https://9to5google.com/wp-content/uploads/sites/4/2019/10/Google-camera-Pixel-4-XL-2.jpg?quality=82&strip=all&w=1600">

## [NewPipe](https://newpipe.schabi.org/) (**free**, [open source](https://github.com/TeamNewPipe/NewPipe))

NewPipe is a lightweight YouTube app that has some features that make it very useful for power users. For one, it can go to 3x speed and save that speed for all videos automatically. It can also play videos and audio in the background which the official YouTube app won't let you do unless you pay for YouTube Premium. There are of course also no ads.

For alternatives, look at [YouTube Vanced](https://vanced.app/) which sadly only goes up to 2x speed.

<img src="https://newpipe.schabi.org/img/screenshots/shot_08.png">

## [Termux](https://termux.com/) (**free**, [open source](https://github.com/termux/termux-app))

This is a terminal emulator for Android. Basically, it can run Linux applications and packages since Android is based on Linux. I use it primarily to interface with [iA Writer](#ia-writer-free-optional-paid-features). With it, I can commit the Markdown files to a git repository after editing them on my phone.

<img src="https://lh3.googleusercontent.com/6bceRPjMRf_boUzYdY0HN-UeV_yhnwN2fKDxTgOc4AX0zXc6Xjq0ZALZv5ubem3GODk=w1920-h983">

## [iA Writer](https://ia.net/writer) (**free**, optional paid features)

iA Writer is a Markdown editor that I use for taking notes. Then, with [Termux](#termux-free-open-source), I can commit the Markdown files to a git repository. iA Writer can also interface with Google Drive, Dropbox and others as well, so it's a good all-around editor.

<img src="https://ia.net/wp-content/uploads/2017/10/iA-Writer-for-Android-Oreo.png">

# iOS

## [Working Copy](https://workingcopyapp.com/) (**free**, optional paid features)

This is a good git client that I use for the same reasons as [Termux](#termux-free-open-source). While it's not a full terminal emulator like in Android, it does the job, syncing my notes with [iA Writer](#ia-writer-free-optional-paid-features).

<img src="https://workingcopyapp.com/img/working-copy-poster@2x.jpg">

## [AdGuard](https://adguard.com/en/welcome.html) (**paid**, subscription)

[See above](#adguard-paid-subscription)

## [Bound](https://bound.timbueno.com/) (**paid**)

This audiobook player is unique in that it connects to your cloud service like Google Drive or Dropbox and streams or downloads your books from there. It can be very useful if you don't have much storage on your phone.

<img src="https://bound.timbueno.com/images/iPhone_promo_1.png">

# Web

## [uBlock Origin](https://github.com/gorhill/uBlock) (**free**, open source)

This should be the first extension that anyone installs. It's a very efficient adblocker that not only blocks ads but also other trackers that stalk your browsing online. It is remarkably effective and is not bought out by advertising companies like many adblockers, including Adblock and Adblock Plus.

Note that uBlock is not the same as uBlock Origin, the former is a malicious version.

<img src="https://user-images.githubusercontent.com/585534/84045360-b10ee580-a976-11ea-9e91-29c2107b47c2.png">

## [uMatrix](https://github.com/gorhill/uMatrix) (**free**, open source)

This is by the same creator as [uBlock Origin](#ublock-origin-free-open-source) and this extension enables you to turn off Javascript as well as any trackers. It can break much of the web for the first few days as you get used to overriding your visited websites, but afterwards, it makes the Web so much faster as every site doesn't load a bunch of heavy files just to read what's on the page.

<img src="https://addons.cdn.mozilla.net/user-media/previews/full/158/158458.png?modified=1543520594">

## [Checker Plus for Gmail](https://jasonsavard.com/Checker-Plus-for-Gmail) (**free**, optional paid features)

This extension adds your inbox in your toolbar so that you never have to open up Gmail again. I set it so that opening the email does not mark it read, as oftentimes I have to think about it before replying or taking some action.

<img src="https://jasonsavard.com/images/extensions/checkerPlusForGmail/popup.png">

## [Dark Reader](https://darkreader.org/) (**free**, [open source](https://github.com/darkreader/darkreader))

This adds dark mode to every single website, with manual overrides and customization options.

<img src="https://camo.githubusercontent.com/eeb3d4fc1f2a77072658d07ddad934b4f204d9e3/68747470733a2f2f692e696d6775722e636f6d2f4479426c5977552e706e67">

## [SponsorBlock](https://sponsor.ajay.app/) (**free**, [open source](https://github.com/ajayyy/SponsorBlock))

After removing ads from YouTube with [uBlock Origin](#ublock-origin-free-open-source), you can now remove annoying sponsor messages, 5 minute long intros, end cards and more with SponsorBlock. How it works is it crowdsources which times a given sponsor or intro occurs, then in the YouTube player it'll skip those sections automatically. You can even contribute times to help out the crowdsourcing.

If you want to support your creators, you can whitelist channels, or better yet, donate directly to them via Patreon or similar, and they'll get a lot more of your money than ads or sponsorship deals.

<img src="https://addons.cdn.mozilla.net/user-media/previews/thumbs/227/227750.png?modified=1572882419">

## [Hover Zoom+](https://github.com/extesy/hoverzoom) (**free**, open source)

This allows you to hover your mouse over an image, video or GIF and it'll show up and start playing automatically. Now you don't have to look at links in individual tabs, you can just hover over them.

<img src="https://lh3.googleusercontent.com/JQhOd6nnSIVMA68iQOgJ2jI8M42GzWoUkarXLlgJnCCENkPc5LzCWS3Q7cTfvpEvoQ4-IvC0dA=w640-h400-e365">

## [DF Tube](https://chrome.google.com/webstore/detail/df-tube-distraction-free/mjdepdfccjgcndkmemponafgioodelna?hl=en) (**free**)

This lets you watch YouTube without all of the distractions, like the Trending tab, the viral videos, and so on. Use this in conjunction with [my advice on getting rid of YouTube recommendations](../../how-to/perils-of-youtube-recommendations/index.html).

<img src="https://lh3.googleusercontent.com/Dpz0bX24cXVZuNcpgbV61bc8K8OMI233NA_cFeLfI3rfdFpPWRnCxiBqu0GeWtmxbtwNRucBKg=w640-h400-e365">