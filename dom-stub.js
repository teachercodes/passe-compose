const elements = new Map(), handlers = {}, windowHandlers = {};
let savedValue = null;
function element(selector) {
  if (!elements.has(selector)) elements.set(selector, {
    innerHTML: '', textContent: '', value: '', offsetTop: 0,
    classList: { toggle(){}, add(){}, remove(){} },
    focus(){}, setAttribute(){}, scrollIntoView(){}, select(){},
    showModal(){this.open=true;},close(){this.open=false;},click(){}
  });
  return elements.get(selector);
}
globalThis.document = {
  title: '', querySelector: element, createElement: element,
  addEventListener: (name, fn) => handlers[name] = fn
};
globalThis.localStorage = { getItem:()=>savedValue,setItem:(key,value)=>savedValue=value };
globalThis.window = {scrollTo(){}, print(){},addEventListener:(name,fn)=>windowHandlers[name]=fn};
globalThis.navigator = {clipboard:{writeText:async()=>{}}};
globalThis.URL = {createObjectURL:()=> 'blob:mock',revokeObjectURL(){}};
globalThis.Blob = class {};
globalThis.setTimeout = fn=>fn();
globalThis.FormData = class {constructor(form){this.form=form;}get(key){return this.form.answers[key];}};
