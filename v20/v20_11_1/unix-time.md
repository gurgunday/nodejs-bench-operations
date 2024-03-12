## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,041,399|94|
|Date.now()|21,298,149|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":12041398.768354237,"samples":5},{"name":"Date.now()","opsSec":21298148.85492444,"samples":5}]}-->