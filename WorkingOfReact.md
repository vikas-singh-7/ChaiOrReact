# working of react 
<h1>How React Works</h1>

<hr/>

<h2>so the whole concept is virtual dom </h2>

<ol>

<li>The browser initially creates the real DOM average browser work :P</li>

<li>React simultaneously creates a virtual DOM, an exact copy of the real DOM in memory. FirstStep</li>

<li>When a state change occurs, React creates <b>a new virtual DOM </b> representing the updated UI. step 2 </li>

<li>React then compares the old and new virtual DOMs, identifying the <b>differences</b> (diffs) between them.</li>

<li>It determines the minimal set of changes needed to update the real DOM efficiently.</li>
<li>React applies only those specific changes to the real DOM, avoiding unnecessary rendering of the entire DOM tree.</li>

<li>The old virtual DOM, which was a mirror image of the real DOM, is <b>discarded</b>.</li>

<li>The updated real DOM becomes the reference for the next round of updates.</li>

</ol>