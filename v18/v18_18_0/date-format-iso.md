## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,577,954|98|
|fromUnixToISOString(new Date())|2,025,799|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2577953.7372371783,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2025799.0074189224,"samples":6}]}-->