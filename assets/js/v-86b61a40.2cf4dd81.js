"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[65479],{818218:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-86b61a40","path":"/devices/TS0601_thermostat_3.html","title":"TuYa TS0601_thermostat_3 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_thermostat_3 control via MQTT","description":"Integrate your TuYa TS0601_thermostat_3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-01-01T08:59:10.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Scale_protection (binary)","slug":"scale-protection-binary","link":"#scale-protection-binary","children":[]},{"level":3,"title":"Frost_protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Error (numeric)","slug":"error-numeric","link":"#error-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1675182776000},"filePathRelative":"devices/TS0601_thermostat_3.md"}')},471549:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var a=o(166252);const i=(0,a._)("h1",{id:"tuya-ts0601-thermostat-3",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-ts0601-thermostat-3","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa TS0601_thermostat_3")],-1),r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"TS0601_thermostat_3")],-1),d=(0,a._)("td",null,"Vendor",-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Thermostatic radiator valve")],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"lock (state), battery_low, climate (current_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration), scale_protection, frost_protection, error, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat_3.jpg",alt:"TuYa TS0601_thermostat_3"})])],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"White-label"),(0,a._)("td",null,"Avatto ME167")],-1),h=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>heat</code>, <code>off</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code></li></ul><h3 id="scale-protection-binary" tabindex="-1"><a class="header-anchor" href="#scale-protection-binary" aria-hidden="true">#</a> Scale_protection (binary)</h3><p>If the heat sink is not fully opened within two weeks or is not used for a long time, the valve will be blocked due to silting up and the heat sink will not be able to be used. To ensure normal use of the heat sink, the controller will automatically open the valve fully every two weeks. It will run for 30 seconds per time with the screen displaying &quot;Ad&quot;, then return to its normal working state again.. Value can be found in the published state on the <code>scale_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;scale_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> scale_protection is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary" aria-hidden="true">#</a> Frost_protection (binary)</h3><p>When the room temperature is lower than 5 °C, the valve opens; when the temperature rises to 8 °C, the valve closes.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost_protection is ON, if <code>OFF</code> OFF.</p><h3 id="error-numeric" tabindex="-1"><a class="header-anchor" href="#error-numeric" aria-hidden="true">#</a> Error (numeric)</h3><p>If NTC is damaged, &quot;Er&quot; will be on the TRV display.. Value can be found in the published state on the <code>error</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),p={},_=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[r,(0,a._)("tbody",null,[l,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),c,n,s,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);