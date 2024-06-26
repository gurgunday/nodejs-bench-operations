## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,682,338|95|
|Using dot notation|821,016,568|93|
|Using define property (writable)|4,437,716|95|
|Using define property initialized (writable)|6,211,155|89|
|Using define property (getter)|2,456,443|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:20:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":820682338.4857408,"samples":6},{"name":"Using dot notation","opsSec":821016567.8338205,"samples":6},{"name":"Using define property (writable)","opsSec":4437716.2085599825,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6211155.103549735,"samples":4},{"name":"Using define property (getter)","opsSec":2456443.4383145166,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.097ms
new Array(length)|100|0.013ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.28ms
new Array(length)|10,000|0.159ms
array.push|1,000,000|26.18ms
new Array(length)|1,000,000|5.489ms
array.push|100,000,000|995.158ms
new Array(length)|100,000,000|3,629.398ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.336ms
new Array(length)|10,000|0.222ms
array.push|1,000,000|15.973ms
new Array(length)|1,000,000|6.636ms
array.push|100,000,000|1,136.818ms
new Array(length)|100,000,000|3,584.353ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|604|84|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":604.2308094740906,"samples":4},{"name":"Array.from","opsSec":22.550231506448434,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|817,382,639|99|
|[async] async function|16,029,211|84|
|[async] function|271,685|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"function","opsSec":817382638.8484887,"samples":9},{"name":"[async] async function","opsSec":16029211.29120887,"samples":7},{"name":"[async] function","opsSec":271684.7991591355,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,474|90|
|new Blob (1024)|699|78|
|text (128)|5,883|87|
|text (1024)|755|90|
|arrayBuffer (128)|5,894|87|
|arrayBuffer (1024)|754|88|
|slice (0, 64)|194,095|58|
|slice (0, 512)|29,918|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5473.567234534995,"samples":3},{"name":"new Blob (1024)","opsSec":698.5926217527641,"samples":2},{"name":"text (128)","opsSec":5883.330981963861,"samples":8},{"name":"text (1024)","opsSec":754.6613501406663,"samples":2},{"name":"arrayBuffer (128)","opsSec":5894.26944202564,"samples":3},{"name":"arrayBuffer (1024)","opsSec":754.0757952044708,"samples":2},{"name":"slice (0, 64)","opsSec":194095.2085102952,"samples":4},{"name":"slice (0, 512)","opsSec":29918.285767534602,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,786|50|
|[True conditional] Using constructor name|200,939|95|
|[True conditional] Check if property is valid then instanceof |202,228|94|
|[False conditional] Using instanceof only|818,393,053|97|
|[False conditional] Using constructor name|821,817,717|93|
|[False conditional] Check if property is valid then instanceof |818,952,933|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:33:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":246786.42799221072,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":200939.00628326967,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":202228.06938940173,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":818393052.5169063,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":821817717.3629736,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":818952933.4210017,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,679|90|
|crypto.verify('RSA-SHA256')|6,671|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6679.398500308009,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6671.390903540662,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,149|94|
|fromUnixToISOString(new Date())|2,193,597|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396149.0986145088,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2193597.186286845,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,783|83|
|Intl.DateTimeFormat().format(new Date())|19,218|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,135|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,419|83|
|Reusing Intl.DateTimeFormat()|692,943|86|
|Date.toLocaleDateString()|788,152|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,053|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16783.155040540678,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19217.62973272406,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16134.817087016814,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17419.3866168038,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":692943.0641317979,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":788151.7795957364,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20052.616249230956,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,119,395|90|
|Using brackets {}|1,151,127|94|
|Using '' + |1,154,433|96|
|Using date.toString()|1,293,793|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1119395.0520366258,"samples":4},{"name":"Using brackets {}","opsSec":1151126.6057682394,"samples":4},{"name":"Using '' + ","opsSec":1154433.2969477058,"samples":6},{"name":"Using date.toString()","opsSec":1293793.0370958813,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,892,744|94|
|Using delete property (proto: null)|20,829,654|91|
|Using delete property (cached proto: null)|3,983,586|94|
|Using undefined assignment|819,863,437|96|
|Using undefined assignment (proto: null)|23,410,117|99|
|Using undefined property (cached proto: null)|818,302,979|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3892743.699560664,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20829653.655546788,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3983585.6303053712,"samples":4},{"name":"Using undefined assignment","opsSec":819863437.3852675,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23410116.987833936,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":818302978.5280856,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|236,555|52|
|NodeError|197,068|94|
|NodeError Range|197,283|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:46:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":236555.28586807966,"samples":3},{"name":"NodeError","opsSec":197067.71846854928,"samples":3},{"name":"NodeError Range","opsSec":197283.48033025616,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,766,806|91|
|Function returning explicitly undefined|1,859,844|99|
|Function returning implicitly undefined|1,910,840|96|
|Function returning string|1,853,416|92|
|Function returning integer|1,840,595|96|
|Function returning float|1,839,237|96|
|Function returning functions|1,787,563|96|
|Function returning arrow functions|1,858,741|93|
|Function returning empty object|1,851,225|94|
|Function returning empty array|1,884,395|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:48:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Function returning null","opsSec":1766805.9930144341,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1859844.3935461424,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1910839.7076219106,"samples":5},{"name":"Function returning string","opsSec":1853415.9539396646,"samples":6},{"name":"Function returning integer","opsSec":1840595.1070678087,"samples":6},{"name":"Function returning float","opsSec":1839237.3930477027,"samples":6},{"name":"Function returning functions","opsSec":1787563.240938797,"samples":5},{"name":"Function returning arrow functions","opsSec":1858741.306221022,"samples":6},{"name":"Function returning empty object","opsSec":1851224.9852623618,"samples":6},{"name":"Function returning empty array","opsSec":1884395.4292499095,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|819,781,392|96|
|using Array.includes (first item)|822,244,135|95|
|Using raw comparison|823,387,015|96|
|Using raw comparison (first item)|824,314,994|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":819781391.7118386,"samples":8},{"name":"using Array.includes (first item)","opsSec":822244135.0732285,"samples":6},{"name":"Using raw comparison","opsSec":823387015.3938857,"samples":9},{"name":"Using raw comparison (first item)","opsSec":824314994.4864911,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,418,394|92|
|Using Object.getOwnPropertyNames()|90,256,460|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using Object.keys()","opsSec":92418394.06157508,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":90256460.08544174,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|866,780,869|94|
|Length = 10_000 - Array.at|870,092,920|99|
|Length = 1_000_000 - Array.at|867,086,625|96|
|Length = 100 - Array[length - 1]|818,186,562|97|
|Length = 10_000 - Array[length - 1]|818,303,598|97|
|Length = 1_000_000 - Array[length - 1]|818,109,106|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":866780869.3034127,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":870092919.7426186,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":867086625.0816306,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":818186562.1207709,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":818303598.3347789,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":818109105.7325722,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|80,343,333|91|
|Object.create({})|2,308,038|80|
|Cached Empty.prototype|815,941,273|97|
|Empty.prototype|2,279,667|90|
|Empty class|1,467,433|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":80343333.40698089,"samples":5},{"name":"Object.create({})","opsSec":2308038.401683258,"samples":3},{"name":"Cached Empty.prototype","opsSec":815941273.3065685,"samples":8},{"name":"Empty.prototype","opsSec":2279667.4157694257,"samples":5},{"name":"Empty class","opsSec":1467433.143526245,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|819,985,196|99|
|Using optional chain (obj.field?.field2) (undefined)|822,260,700|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|821,573,275|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,560,012|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":819985196.2660252,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822260700.1756568,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":821573274.9843723,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821560012.3557776,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|823,470,837|97|
|Using parseInt(x, 10) - big number (10 len)|824,017,354|98|
|Using + - small number (2 len)|824,308,810|97|
|Using + - big number (10 len)|823,867,081|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:57:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":823470837.3872637,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":824017353.5479484,"samples":7},{"name":"Using + - small number (2 len)","opsSec":824308810.0278364,"samples":8},{"name":"Using + - big number (10 len)","opsSec":823867081.005629,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,346,753|85|
|Using ? operator to avoid rejection|1,365,649|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using if to check function existence","opsSec":1346753.2095533218,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1365648.934852395,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|818,282,677|92|
|Raw usage underscore usage|819,578,847|97|
|Manipulating private properties using #|809,279,303|96|
|Manipulating private properties using underscore(_)|812,430,824|91|
|Manipulating private properties using Symbol|809,981,230|99|
|Manipulating private properties using PrivateSymbol|49,908,122|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:00:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":818282677.1121724,"samples":6},{"name":"Raw usage underscore usage","opsSec":819578846.7113158,"samples":8},{"name":"Manipulating private properties using #","opsSec":809279302.8725079,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":812430824.4561744,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":809981230.1802984,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49908121.87073717,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,129,757|96|
|Adding property in the object creation - small object|5,176,796|95|
|Adding property after the function creation - small class|269,753|90|
|Adding property in the function creation - small class|273,109|90|
|Adding property after the class creation - small class|271,647|88|
|Adding property in the class creation - small class|270,206|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5129756.803315355,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":5176796.243752139,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":269752.9628375944,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":273109.3017115343,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":271646.8511163395,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":270206.41283968056,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|812,828,941|96|
|Getter|91,514,349|96|
|Method|813,516,200|98|
|DefineProperty (getter)|811,461,530|94|
|DefineProperty (getter & enumerable=false)|91,357,645|99|
|DefineProperty (getter & configurable=false)|813,260,769|92|
|DefineProperty (getter & enumerable=false & configurable=false)|92,381,511|99|
|DefineProperty (writable)|814,118,535|97|
|DefineProperty (writable & enumerable=false)|814,903,011|98|
|DefineProperty (writable & enumerable=false & configurable=false)|814,517,618|96|
|DefineProperties (getter)|92,688,716|96|
|DefineProperties (getter & enumerable=false)|85,563,114|92|
|DefineProperties (getter & enumerable=false & configurable=false)|57,990,487|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:04:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Getter (class)","opsSec":812828941.1264219,"samples":6},{"name":"Getter","opsSec":91514349.41344602,"samples":6},{"name":"Method","opsSec":813516200.3251485,"samples":6},{"name":"DefineProperty (getter)","opsSec":811461529.5374109,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91357645.21335338,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":813260769.2925522,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92381511.12351352,"samples":7},{"name":"DefineProperty (writable)","opsSec":814118535.2845768,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":814903010.9505908,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":814517618.4344723,"samples":6},{"name":"DefineProperties (getter)","opsSec":92688716.42064479,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":85563114.09777229,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":57990486.528400734,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|772,768,747|96|
|Setter|12,545,657|96|
|Method|783,325,345|98|
|DefineProperty (setter)|780,466,000|99|
|DefineProperty (setter & enumerable=false)|12,562,382|93|
|DefineProperty (setter & configurable=false)|12,580,362|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,601,970|96|
|DefineProperty (writable)|785,064,738|99|
|DefineProperty (writable & enumerable=false)|783,506,516|96|
|DefineProperty (writable & enumerable=false & configurable=false)|563,734,153|71|
|DefineProperties (setter)|114,575,988|85|
|DefineProperties (setter & enumerable=false)|11,526,441|93|
|DefineProperties (setter & enumerable=false & configurable=false)|12,302,191|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:06:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Setter (class)","opsSec":772768747.3327312,"samples":5},{"name":"Setter","opsSec":12545656.518869083,"samples":4},{"name":"Method","opsSec":783325345.079479,"samples":6},{"name":"DefineProperty (setter)","opsSec":780465999.5231353,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12562381.67172136,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12580362.310410058,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12601969.608243097,"samples":6},{"name":"DefineProperty (writable)","opsSec":785064738.4603152,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":783506516.1379514,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":563734153.3161092,"samples":7},{"name":"DefineProperties (setter)","opsSec":114575988.31500103,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11526441.217846869,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12302191.12886087,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,166,739|93|
|Using replaceAll()|3,003,614|94|
|Using replaceAll(//g)|2,977,667|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using replace(//g)","opsSec":3166739.249384589,"samples":5},{"name":"Using replaceAll()","opsSec":3003614.379647536,"samples":4},{"name":"Using replaceAll(//g)","opsSec":2977666.9312535548,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,404,896|94|
|{ ...object, __proto__: null }|2,534,449|97|
|{ ...object, newProp: true }|27,850,733|98|
|structuredClone|279,313|94|
|JSON.parse + JSON.stringify|233,325|98|
|loop + object.keys starting with {}|1,477,698|92|
|loop + object.keys starting with { __proto__: null }|799,940|96|
|loop + object.keys starting with { randomProp: true }|628,916|93|
|object.keys + reduce(FN, {})|600,750|95|
|object.keys + reduce(FN, { __proto__: null })|801,926|95|
|object.keys + reduce(FN, { newProp: true })|640,568|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30404895.885414574,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":2534449.1789552863,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":27850732.817575913,"samples":6},{"name":"structuredClone","opsSec":279312.7127332449,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":233324.7783494228,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1477698.0598641192,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":799940.0285972649,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":628916.2423669175,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":600750.1158937846,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":801926.2021347184,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":640568.2938051507,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|332,997|95|
|Sort using first char|1,455,372|89|
|Sort using localeCompare|1,290,074|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:13:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":332996.78188802453,"samples":4},{"name":"Sort using first char","opsSec":1455372.1501273257,"samples":8},{"name":"Sort using localeCompare","opsSec":1290073.5934064742,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,016|91|
|{...smallObject} - Total keys: 2|113,547,511|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,230|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,323|98|
|{ ...bigObject, ...anotherBigObject }|1,239|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,887,969|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,777,015|94|
|{ ...smallObject, ...anotherSmallObject }|24,676,600|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2015.9813350325223,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":113547510.56227526,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2229.9947755685093,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6322.528218527459,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1239.3869020432128,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14887968.996359902,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36777014.78315813,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24676600.306504667,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,068|85|
|streams.web.Readable reading 1e3 * "some data"|2,035|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2067.6189766998473,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2035.0220334682365,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,803|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,511|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5802.9516357712155,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1510.5800800533805,"samples":5}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|821,447,512|97|
|Using backtick (`)|819,100,564|96|
|Using array.join|11,209,795|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":821447512.2203612,"samples":6},{"name":"Using backtick (`)","opsSec":819100564.2740186,"samples":8},{"name":"Using array.join","opsSec":11209794.555433659,"samples":4}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|274,717,673|96|
|(short string) (true) String#slice and strict comparison|820,169,731|98|
|(long string) (true) String#endsWith|174,109,594|94|
|(long string) (true) String#slice and strict comparison|820,036,478|96|
|(short string) (false) String#endsWith|784,235,597|99|
|(short string) (false) String#slice and strict comparison|820,335,360|94|
|(long string) (false) String#endsWith|782,895,808|97|
|(long string) (false) String#slice and strict comparison|821,820,022|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":274717673.0623445,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820169731.1489521,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":174109594.10330433,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":820036478.4443415,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":784235597.1647754,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820335360.3709838,"samples":9},{"name":"(long string) (false) String#endsWith","opsSec":782895808.2790543,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":821820022.310568,"samples":10}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|822,017,013|99|
|Using indexof|822,137,563|94|
|Using RegExp.test|17,084,038|97|
|Using RegExp.text with cached regex pattern|17,616,487|95|
|Using new RegExp.test|4,802,904|93|
|Using new RegExp.test with cached regex pattern|5,462,487|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using includes","opsSec":822017013.3762975,"samples":6},{"name":"Using indexof","opsSec":822137563.4900614,"samples":6},{"name":"Using RegExp.test","opsSec":17084037.601491854,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17616487.2543741,"samples":6},{"name":"Using new RegExp.test","opsSec":4802903.948796353,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5462487.301787908,"samples":6}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|278,929,497|97|
|(short string) (true) String#slice and String#indexOf|816,538,928|95|
|(short string) (true) String#slice and strict comparison|821,038,526|97|
|(long string) (true) String#startsWith|174,710,409|96|
|(long string) (true) String#slice and strict comparison|821,979,247|97|
|(short string) (false) String#startsWith|781,134,470|97|
|(short string) (false) String#slice and strict comparison|817,396,443|97|
|(long string) (false) String#startsWith|784,722,188|96|
|(long string) (false) String#slice and strict comparison|820,280,225|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":278929496.68096966,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":816538928.4016563,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821038526.3098118,"samples":9},{"name":"(long string) (true) String#startsWith","opsSec":174710408.8258393,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":821979247.1783584,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":781134470.126482,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":817396443.1869333,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":784722188.4088882,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":820280224.810163,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|817,188,167|98|
|Using this|820,599,070|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using super","opsSec":817188167.4123662,"samples":6},{"name":"Using this","opsSec":820599069.6953595,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,662,448|94|
|Date.now()|21,810,293|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().getTime()","opsSec":11662448.295922719,"samples":6},{"name":"Date.now()","opsSec":21810292.824113082,"samples":5}]}-->
