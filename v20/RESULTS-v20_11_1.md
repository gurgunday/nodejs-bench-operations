## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,367,488|97|
|Using dot notation|846,421,153|99|
|Using define property (writable)|4,125,919|97|
|Using define property initialized (writable)|6,347,504|96|
|Using define property (getter)|2,500,459|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":847367488.4391268,"samples":6},{"name":"Using dot notation","opsSec":846421152.9888067,"samples":6},{"name":"Using define property (writable)","opsSec":4125918.7905529486,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6347503.550266142,"samples":5},{"name":"Using define property (getter)","opsSec":2500458.648157595,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.015ms
array.push|1,000|0.053ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.487ms
array.push|1,000,000|28.773ms
new Array(length)|1,000,000|6.424ms
array.push|100,000,000|1,097.994ms
new Array(length)|100,000,000|3,539.986ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.239ms
new Array(length)|10,000|0.174ms
array.push|1,000,000|20.478ms
new Array(length)|1,000,000|2.722ms
array.push|100,000,000|1,327.184ms
new Array(length)|100,000,000|3,515.38ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|577|82|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":577.2280433464429,"samples":3},{"name":"Array.from","opsSec":20.985733512543536,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,864,967|95|
|[async] async function|17,754,571|86|
|[async] function|182,507|20|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846864967.2407211,"samples":7},{"name":"[async] async function","opsSec":17754571.47143125,"samples":6},{"name":"[async] function","opsSec":182507.42247259212,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,230|89|
|new Blob (1024)|664|76|
|text (128)|5,727|85|
|text (1024)|735|88|
|arrayBuffer (128)|5,832|88|
|arrayBuffer (1024)|718|86|
|slice (0, 64)|74,260|72|
|slice (0, 512)|20,784|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5230.404695873954,"samples":5},{"name":"new Blob (1024)","opsSec":664.0996036826341,"samples":2},{"name":"text (128)","opsSec":5727.4667541725175,"samples":6},{"name":"text (1024)","opsSec":734.5118837809699,"samples":3},{"name":"arrayBuffer (128)","opsSec":5832.284951875313,"samples":3},{"name":"arrayBuffer (1024)","opsSec":717.9712122284149,"samples":3},{"name":"slice (0, 64)","opsSec":74260.06412443666,"samples":4},{"name":"slice (0, 512)","opsSec":20784.316908195964,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,208|55|
|[True conditional] Using constructor name|190,668|92|
|[True conditional] Check if property is valid then instanceof |194,148|93|
|[False conditional] Using instanceof only|845,864,883|97|
|[False conditional] Using constructor name|846,022,624|95|
|[False conditional] Check if property is valid then instanceof |846,349,677|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":237208.41353941304,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":190667.91652097728,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":194147.82501762707,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":845864883.1897147,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":846022623.8702893,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846349676.7456006,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,781|92|
|crypto.verify('RSA-SHA256')|6,719|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:41:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6780.676814285697,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6719.052117422278,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,469,069|93|
|fromUnixToISOString(new Date())|2,244,559|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1469069.4296916723,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2244559.033366767,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,782|82|
|Intl.DateTimeFormat().format(new Date())|16,378|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,059|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,169|96|
|Reusing Intl.DateTimeFormat()|680,270|84|
|Date.toLocaleDateString()|795,312|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,396|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15781.737339317859,"samples":7},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16377.890433745964,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18058.749354435855,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19168.90845935912,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":680269.6291352476,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":795312.0805693568,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17396.16447909511,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,125,535|93|
|Using brackets {}|1,142,262|97|
|Using '' + |1,148,048|98|
|Using date.toString()|1,258,973|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1125535.047875276,"samples":5},{"name":"Using brackets {}","opsSec":1142261.5320490182,"samples":5},{"name":"Using '' + ","opsSec":1148047.6659132212,"samples":7},{"name":"Using date.toString()","opsSec":1258972.5387106978,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,849,167|92|
|Using delete property (proto: null)|20,309,488|95|
|Using delete property (cached proto: null)|3,892,984|93|
|Using undefined assignment|845,786,496|99|
|Using undefined assignment (proto: null)|22,932,802|91|
|Using undefined property (cached proto: null)|846,391,940|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":3849166.6788704307,"samples":7},{"name":"Using delete property (proto: null)","opsSec":20309487.87282716,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3892983.5949821705,"samples":6},{"name":"Using undefined assignment","opsSec":845786496.4591333,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22932801.55672715,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":846391940.36147,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|232,729|51|
|NodeError|188,502|93|
|NodeError Range|191,059|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":232728.64993760904,"samples":3},{"name":"NodeError","opsSec":188501.88380949246,"samples":3},{"name":"NodeError Range","opsSec":191059.45777155715,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,768,562|89|
|Function returning explicitly undefined|1,752,386|93|
|Function returning implicitly undefined|1,834,240|90|
|Function returning string|1,783,905|94|
|Function returning integer|1,783,985|94|
|Function returning float|1,784,406|95|
|Function returning functions|1,723,110|93|
|Function returning arrow functions|1,714,498|96|
|Function returning empty object|1,783,757|96|
|Function returning empty array|1,786,444|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Function returning null","opsSec":1768561.9601690243,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1752386.0054016884,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1834239.812939981,"samples":5},{"name":"Function returning string","opsSec":1783905.2577719332,"samples":5},{"name":"Function returning integer","opsSec":1783985.4083977954,"samples":4},{"name":"Function returning float","opsSec":1784406.0211665584,"samples":7},{"name":"Function returning functions","opsSec":1723109.7918117482,"samples":4},{"name":"Function returning arrow functions","opsSec":1714497.8515188305,"samples":4},{"name":"Function returning empty object","opsSec":1783757.3822267463,"samples":6},{"name":"Function returning empty array","opsSec":1786443.9459324807,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|858,694,536|100|
|using Array.includes (first item)|855,864,738|99|
|Using raw comparison|850,897,616|99|
|Using raw comparison (first item)|847,125,190|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":858694535.5021778,"samples":8},{"name":"using Array.includes (first item)","opsSec":855864737.6210253,"samples":6},{"name":"Using raw comparison","opsSec":850897616.1400636,"samples":6},{"name":"Using raw comparison (first item)","opsSec":847125189.9680749,"samples":8}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,643,623|88|
|Using Object.getOwnPropertyNames()|97,472,623|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":93643622.9101056,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":97472623.08866982,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|892,248,477|94|
|Length = 10_000 - Array.at|888,973,765|94|
|Length = 1_000_000 - Array.at|890,403,742|92|
|Length = 100 - Array[length - 1]|784,870,809|97|
|Length = 10_000 - Array[length - 1]|785,149,703|97|
|Length = 1_000_000 - Array[length - 1]|784,751,468|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":892248477.1231781,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":888973765.0629021,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":890403742.2719884,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":784870809.2209759,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":785149702.8520521,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":784751468.3233573,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|88,116,406|96|
|Object.create({})|2,490,525|83|
|Cached Empty.prototype|844,424,392|94|
|Empty.prototype|2,505,440|79|
|Empty class|1,434,010|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Object.create(null)","opsSec":88116405.56804898,"samples":5},{"name":"Object.create({})","opsSec":2490524.9567549382,"samples":4},{"name":"Cached Empty.prototype","opsSec":844424391.9971248,"samples":6},{"name":"Empty.prototype","opsSec":2505439.7673529848,"samples":3},{"name":"Empty class","opsSec":1434009.7988282198,"samples":5}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,306,641|100|
|Using optional chain (obj.field?.field2) (undefined)|848,011,842|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|846,675,352|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,655,754|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848306641.2072328,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848011842.3801391,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":846675351.9957483,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845655754.407129,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|848,420,733|97|
|Using parseInt(x, 10) - big number (10 len)|844,597,256|97|
|Using + - small number (2 len)|847,979,629|98|
|Using + - big number (10 len)|848,027,497|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":848420733.1536328,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":844597256.112662,"samples":7},{"name":"Using + - small number (2 len)","opsSec":847979629.0168072,"samples":7},{"name":"Using + - big number (10 len)","opsSec":848027496.832957,"samples":7}]}-->