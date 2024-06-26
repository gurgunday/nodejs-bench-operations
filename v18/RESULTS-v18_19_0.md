## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|819,505,367|97|
|Using dot notation|787,157,794|94|
|Using define property (writable)|4,260,711|95|
|Using define property initialized (writable)|5,897,360|90|
|Using define property (getter)|2,286,029|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":819505367.0324596,"samples":6},{"name":"Using dot notation","opsSec":787157793.5177962,"samples":8},{"name":"Using define property (writable)","opsSec":4260711.370325327,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5897360.34853542,"samples":5},{"name":"Using define property (getter)","opsSec":2286029.163858436,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.002ms
array.push|100|0.103ms
new Array(length)|100|0.014ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.206ms
array.push|1,000,000|22.839ms
new Array(length)|1,000,000|14.82ms
array.push|100,000,000|970.14ms
new Array(length)|100,000,000|3,616.563ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.017ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.258ms
new Array(length)|10,000|3.355ms
array.push|1,000,000|61.532ms
new Array(length)|1,000,000|2.537ms
array.push|100,000,000|1,412.406ms
new Array(length)|100,000,000|4,103.942ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|547|84|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":547.3554196973566,"samples":3},{"name":"Array.from","opsSec":21.556509508824515,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|818,768,621|97|
|[async] async function|16,372,442|81|
|[async] function|351,035|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":818768620.9984884,"samples":6},{"name":"[async] async function","opsSec":16372442.308637679,"samples":7},{"name":"[async] function","opsSec":351035.24399498705,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,169|82|
|new Blob (1024)|688|81|
|text (128)|33,791|77|
|text (1024)|23,490|85|
|arrayBuffer (128)|34,210|79|
|arrayBuffer (1024)|23,493|82|
|slice (0, 64)|87,050|80|
|slice (0, 512)|40,120|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5168.853133526887,"samples":6},{"name":"new Blob (1024)","opsSec":688.1115696121568,"samples":2},{"name":"text (128)","opsSec":33790.95762690655,"samples":4},{"name":"text (1024)","opsSec":23489.968085882432,"samples":3},{"name":"arrayBuffer (128)","opsSec":34210.16486714638,"samples":4},{"name":"arrayBuffer (1024)","opsSec":23492.94317770886,"samples":3},{"name":"slice (0, 64)","opsSec":87050.17579847778,"samples":3},{"name":"slice (0, 512)","opsSec":40119.951756050956,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|261,492|55|
|[True conditional] Using constructor name|204,829|95|
|[True conditional] Check if property is valid then instanceof |207,851|96|
|[False conditional] Using instanceof only|819,775,360|96|
|[False conditional] Using constructor name|815,010,673|90|
|[False conditional] Check if property is valid then instanceof |820,281,907|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":261491.90293942794,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":204829.13889423557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":207850.81729145406,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819775359.9137529,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":815010672.9061419,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":820281907.4632835,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,387|90|
|crypto.verify('RSA-SHA256')|6,472|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6387.269995427675,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":6472.086649794424,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,521,495|91|
|fromUnixToISOString(new Date())|2,121,397|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2521495.291790346,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2121396.5637922287,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,082|84|
|Intl.DateTimeFormat().format(new Date())|13,818|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,948|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,285|81|
|Reusing Intl.DateTimeFormat()|712,963|96|
|Date.toLocaleDateString()|732,657|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,900|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15082.49585147802,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13817.790465175427,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17947.646555409538,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16284.513205905036,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":712962.8377960159,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":732657.3660158613,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16900.453688701244,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|973,058|95|
|Using brackets {}|986,060|95|
|Using '' + |993,676|96|
|Using date.toString()|1,092,743|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":973058.2137640811,"samples":4},{"name":"Using brackets {}","opsSec":986059.6253381257,"samples":4},{"name":"Using '' + ","opsSec":993675.6785243332,"samples":6},{"name":"Using date.toString()","opsSec":1092743.396453077,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,446,691|96|
|Using delete property (proto: null)|21,552,372|97|
|Using delete property (cached proto: null)|3,467,848|97|
|Using undefined assignment|823,027,520|96|
|Using undefined assignment (proto: null)|23,794,827|90|
|Using undefined property (cached proto: null)|819,823,403|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3446690.9357008096,"samples":6},{"name":"Using delete property (proto: null)","opsSec":21552372.291991495,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3467848.0844576643,"samples":7},{"name":"Using undefined assignment","opsSec":823027519.5682566,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23794827.276386786,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":819823402.585496,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|254,114|53|
|NodeError|203,374|92|
|NodeError Range|203,843|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":254113.88483014438,"samples":3},{"name":"NodeError","opsSec":203373.99870957347,"samples":3},{"name":"NodeError Range","opsSec":203842.60772726822,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,687,737|96|
|Function returning explicitly undefined|1,675,900|94|
|Function returning implicitly undefined|1,691,335|93|
|Function returning string|1,699,200|97|
|Function returning integer|1,697,576|98|
|Function returning float|1,695,843|98|
|Function returning functions|1,651,556|96|
|Function returning arrow functions|1,680,624|94|
|Function returning empty object|1,685,693|97|
|Function returning empty array|1,690,562|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1687737.4497575006,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1675900.4484186454,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1691334.9984938342,"samples":6},{"name":"Function returning string","opsSec":1699199.6838979109,"samples":6},{"name":"Function returning integer","opsSec":1697576.4907261806,"samples":6},{"name":"Function returning float","opsSec":1695842.722954453,"samples":4},{"name":"Function returning functions","opsSec":1651556.059745417,"samples":7},{"name":"Function returning arrow functions","opsSec":1680623.634123653,"samples":5},{"name":"Function returning empty object","opsSec":1685692.9895572504,"samples":6},{"name":"Function returning empty array","opsSec":1690561.5279137024,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|817,990,345|99|
|using Array.includes (first item)|817,542,903|97|
|Using raw comparison|817,842,502|98|
|Using raw comparison (first item)|817,846,889|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":817990345.2659092,"samples":6},{"name":"using Array.includes (first item)","opsSec":817542902.8907378,"samples":9},{"name":"Using raw comparison","opsSec":817842502.4792736,"samples":6},{"name":"Using raw comparison (first item)","opsSec":817846888.9102714,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,458,529|89|
|Using Object.getOwnPropertyNames()|89,664,767|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using Object.keys()","opsSec":92458528.85488057,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":89664766.9619494,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,444,562|97|
|Length = 10_000 - Array.at|23,602,276|93|
|Length = 1_000_000 - Array.at|23,576,737|91|
|Length = 100 - Array[length - 1]|817,237,566|97|
|Length = 10_000 - Array[length - 1]|816,907,262|95|
|Length = 1_000_000 - Array[length - 1]|818,255,571|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23444561.89077845,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":23602275.709243037,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":23576736.666390363,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":817237565.8396883,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":816907261.5225508,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":818255570.5049819,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,151,309|96|
|Object.create({})|1,498,227|80|
|Cached Empty.prototype|817,297,213|97|
|Empty.prototype|1,682,609|87|
|Empty class|1,102,715|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Object.create(null)","opsSec":80151309.23055035,"samples":5},{"name":"Object.create({})","opsSec":1498226.6534553966,"samples":3},{"name":"Cached Empty.prototype","opsSec":817297212.7744421,"samples":7},{"name":"Empty.prototype","opsSec":1682608.6802692087,"samples":5},{"name":"Empty class","opsSec":1102715.1737141376,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,594,358|97|
|Using optional chain (obj.field?.field2) (undefined)|822,243,443|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|820,894,166|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|820,517,833|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821594358.3332707,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822243443.1645736,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":820894166.4276938,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":820517832.5552204,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|237,664,346|96|
|Using parseInt(x, 10) - big number (10 len)|18,435,341|97|
|Using + - small number (2 len)|819,525,379|99|
|Using + - big number (10 len)|818,954,866|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":237664345.75315917,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18435340.7094455,"samples":7},{"name":"Using + - small number (2 len)","opsSec":819525378.8895366,"samples":6},{"name":"Using + - big number (10 len)","opsSec":818954866.2775134,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|830,102|80|
|Using ? operator to avoid rejection|877,851|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using if to check function existence","opsSec":830101.5570585587,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":877851.434585602,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|477,790,599|94|
|Raw usage underscore usage|496,355,638|98|
|Manipulating private properties using #|416,632,340|89|
|Manipulating private properties using underscore(_)|375,971,972|94|
|Manipulating private properties using Symbol|375,402,866|95|
|Manipulating private properties using PrivateSymbol|48,115,794|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":477790598.5564413,"samples":9},{"name":"Raw usage underscore usage","opsSec":496355637.9254769,"samples":9},{"name":"Manipulating private properties using #","opsSec":416632340.38096493,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":375971972.11752766,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":375402866.03481215,"samples":11},{"name":"Manipulating private properties using PrivateSymbol","opsSec":48115793.5056367,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,457,481|98|
|Adding property in the object creation - small object|3,447,075|98|
|Adding property after the function creation - small class|199,265|88|
|Adding property in the function creation - small class|199,496|89|
|Adding property after the class creation - small class|168,889|85|
|Adding property in the class creation - small class|168,343|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3457481.294785729,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":3447074.8974745753,"samples":8},{"name":"Adding property after the function creation - small class","opsSec":199264.51091928783,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":199495.71518882303,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":168888.69635546592,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":168343.31998361513,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|822,486,743|98|
|Getter|91,731,446|93|
|Method|822,679,771|99|
|DefineProperty (getter)|822,639,419|100|
|DefineProperty (getter & enumerable=false)|92,189,925|91|
|DefineProperty (getter & configurable=false)|832,702,520|97|
|DefineProperty (getter & enumerable=false & configurable=false)|94,115,143|94|
|DefineProperty (writable)|841,024,024|96|
|DefineProperty (writable & enumerable=false)|837,854,146|97|
|DefineProperty (writable & enumerable=false & configurable=false)|823,250,544|99|
|DefineProperties (getter)|70,897,190|78|
|DefineProperties (getter & enumerable=false)|59,468,844|92|
|DefineProperties (getter & enumerable=false & configurable=false)|59,245,904|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":822486743.3168354,"samples":6},{"name":"Getter","opsSec":91731446.16848533,"samples":5},{"name":"Method","opsSec":822679770.6208854,"samples":7},{"name":"DefineProperty (getter)","opsSec":822639418.8596534,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":92189925.20295052,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":832702520.4703664,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":94115143.11145654,"samples":6},{"name":"DefineProperty (writable)","opsSec":841024023.8552996,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":837854145.5427616,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":823250543.9412687,"samples":8},{"name":"DefineProperties (getter)","opsSec":70897189.56660783,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":59468843.8426722,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":59245903.9714573,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|775,144,641|96|
|Setter|9,958,458|92|
|Method|779,691,701|98|
|DefineProperty (setter)|778,425,081|93|
|DefineProperty (setter & enumerable=false)|9,885,750|97|
|DefineProperty (setter & configurable=false)|9,888,189|95|
|DefineProperty (setter & enumerable=false & configurable=false)|9,549,268|95|
|DefineProperty (writable)|681,713,565|81|
|DefineProperty (writable & enumerable=false)|139,711,515|80|
|DefineProperty (writable & enumerable=false & configurable=false)|148,533,229|85|
|DefineProperties (setter)|109,866,802|83|
|DefineProperties (setter & enumerable=false)|9,923,008|95|
|DefineProperties (setter & enumerable=false & configurable=false)|9,880,536|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Setter (class)","opsSec":775144641.1265786,"samples":6},{"name":"Setter","opsSec":9958458.226171952,"samples":7},{"name":"Method","opsSec":779691700.8792115,"samples":8},{"name":"DefineProperty (setter)","opsSec":778425081.3848745,"samples":9},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9885749.975118803,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9888189.327992847,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9549268.308971588,"samples":5},{"name":"DefineProperty (writable)","opsSec":681713564.7088989,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":139711514.62137532,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":148533229.25174338,"samples":6},{"name":"DefineProperties (setter)","opsSec":109866801.99842557,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9923008.174265461,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9880535.827095747,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,219,682|92|
|Using replaceAll()|2,369,582|97|
|Using replaceAll(//g)|2,926,193|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3219681.758738572,"samples":5},{"name":"Using replaceAll()","opsSec":2369581.5506720766,"samples":7},{"name":"Using replaceAll(//g)","opsSec":2926192.56661345,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,522,466|94|
|{ ...object, __proto__: null }|25,644,206|94|
|{ ...object, newProp: true }|717,786|88|
|structuredClone|253,179|96|
|JSON.parse + JSON.stringify|174,264|98|
|loop + object.keys starting with {}|501,333|95|
|loop + object.keys starting with { __proto__: null }|697,010|91|
|loop + object.keys starting with { randomProp: true }|535,090|94|
|object.keys + reduce(FN, {})|514,907|94|
|object.keys + reduce(FN, { __proto__: null })|708,922|92|
|object.keys + reduce(FN, { newProp: true })|541,277|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":25522466.439101588,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":25644205.8444407,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":717785.8298286601,"samples":3},{"name":"structuredClone","opsSec":253178.86954304797,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":174263.52983173408,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":501332.69697424676,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":697010.370886517,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":535089.6557965173,"samples":8},{"name":"object.keys + reduce(FN, {})","opsSec":514907.05136015784,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":708922.2156969245,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":541276.738078501,"samples":7}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|274,573|93|
|Sort using first char|1,225,957|96|
|Sort using localeCompare|1,139,090|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":274573.2790009425,"samples":5},{"name":"Sort using first char","opsSec":1225957.3073793566,"samples":6},{"name":"Sort using localeCompare","opsSec":1139090.1000386975,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,029|90|
|{...smallObject} - Total keys: 2|105,170,489|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,222|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,889|97|
|{ ...bigObject, ...anotherBigObject }|1,243|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,390,017|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,422,935|99|
|{ ...smallObject, ...anotherSmallObject }|22,507,265|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2028.5241499679703,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105170488.73180825,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.7810802172667,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5888.508725912553,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1242.7417584741997,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13390017.493523939,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33422935.486697406,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22507264.788753845,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,337|85|
|streams.web.Readable reading 1e3 * "some data"|699|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2336.8399395857077,"samples":6},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":698.6459702234018,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,576|90|
|streams.web.WritableStream writing 1e3 * "some data"|1,537|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:23:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4575.760089261027,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1537.452680956014,"samples":5}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|822,084,380|99|
|Using backtick (`)|821,168,064|98|
|Using array.join|11,583,554|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":822084380.3547837,"samples":6},{"name":"Using backtick (`)","opsSec":821168064.3272998,"samples":6},{"name":"Using array.join","opsSec":11583553.90935333,"samples":5}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,661,662|96|
|(short string) (true) String#slice and strict comparison|820,752,827|94|
|(long string) (true) String#endsWith|75,847,212|97|
|(long string) (true) String#slice and strict comparison|817,748,924|97|
|(short string) (false) String#endsWith|97,618,627|99|
|(short string) (false) String#slice and strict comparison|820,399,070|99|
|(long string) (false) String#endsWith|89,177,555|94|
|(long string) (false) String#slice and strict comparison|818,503,272|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81661662.31872088,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820752826.923517,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":75847211.93330799,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":817748924.323049,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":97618626.79054876,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820399069.668988,"samples":8},{"name":"(long string) (false) String#endsWith","opsSec":89177555.34565848,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":818503272.2615787,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|819,952,424|96|
|Using indexof|819,318,174|99|
|Using RegExp.test|15,997,315|96|
|Using RegExp.text with cached regex pattern|16,921,512|98|
|Using new RegExp.test|3,533,927|94|
|Using new RegExp.test with cached regex pattern|3,786,405|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":819952423.5336107,"samples":8},{"name":"Using indexof","opsSec":819318174.3390874,"samples":7},{"name":"Using RegExp.test","opsSec":15997314.57376252,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":16921511.787822757,"samples":7},{"name":"Using new RegExp.test","opsSec":3533926.826170087,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3786404.860918862,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|214,975,129|97|
|(short string) (true) String#slice and String#indexOf|820,833,072|97|
|(short string) (true) String#slice and strict comparison|821,493,755|95|
|(long string) (true) String#startsWith|133,475,429|97|
|(long string) (true) String#slice and strict comparison|819,470,049|95|
|(short string) (false) String#startsWith|439,083,924|98|
|(short string) (false) String#slice and strict comparison|821,549,922|97|
|(long string) (false) String#startsWith|330,454,487|96|
|(long string) (false) String#slice and strict comparison|454,160,868|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":214975128.98975956,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":820833071.6695398,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821493755.2231146,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":133475428.7395774,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819470048.9293298,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":439083923.6446073,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":821549921.9110488,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":330454486.84421957,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":454160868.14167017,"samples":7}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|157,133,600|92|
|Using this|163,758,983|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using super","opsSec":157133600.08109605,"samples":5},{"name":"Using this","opsSec":163758983.33046606,"samples":9}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,225,241|94|
|Date.now()|19,486,148|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11225240.618303258,"samples":4},{"name":"Date.now()","opsSec":19486148.41598586,"samples":6}]}-->
