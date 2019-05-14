Author: Bibek Gautam
Date: 2019-05-10 16:04
Title: Symmetric art
Slug: symmetric-art
Category: Misc
inbodyjs: /js/symmetricCanvas.js
JavaScripts: p5.min.js, p5.dom.min.js
Tags: art, programming
Summary: A symmetric canvas for your symmetric art pieces.

**This is a canvas that helps you to draw with radial symmetry.**

*Feature suggestions are very welcome.*

<b>Symmetry :</b> <input class="slider" type="range" id="symmetry" min="3" max="9" step="1" value="5">
<span id='symmetryVal'></span><br>

<b>Pencil Shade :</b> <input class="slider" type="range" id="shade" min="0" max="16" step="4" value="8">
<span id='shadeVal'></span>

<br>
<span id="canvas" style="touch-action: none;" class="noScroll" ontouchmove="noscroll"></span>

<button id="reset">reset</button> <button id="save">save</button>
