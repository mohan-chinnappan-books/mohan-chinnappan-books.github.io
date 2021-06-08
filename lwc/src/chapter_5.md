# 5. Component Life Cycle
![Field](https://lh5.googleusercontent.com/proxy/Udf1SHwcHcr_UoxVKfA3Csa-DSHEQVgvji6rjY3bAIMbiQi8wZe04kLyhXPODpHxiusG65rqE47WUPmHPTqXKPQ5OWKDH1UWM2Zn6JAxHySrkveHoC2Xxi0gkhiz6c4Qqz7iLEfbRj-sORmlb3YPQmXhrOtevQQsK5i3ktwKVvIrE0M4_IMsd6WipB10ntb7xFp0S1VgwmgKsQyVG_zc4mbqfjhs1U_46nFh-ZnImtu7lBA42wQvQuSJ84qB9-bACods=s1920-w1920-h1080-fcrop64=1,000030a3fffffe59-k-no-nd-mv)
-  Lifecycle managed by the framework
- The framework:
    - creates components, 
    - inserts them into the DOM, renders them, and removes them from the DOM. 
    - monitors components for property changes

## ```constructor()```
-  Framework fires this method when a component instance is created.


## ```connectedCallback()```
- lifecycle hook fires when a component is **inserted** into the DOM.

## ```disconnectedCallback()```
- lifecycle hook fires when a component is **removed** from the DOM. 


## ```renderedCallback()``` - unique to LWC
- Use it to perform logic after a component has finished the **rendering phase**.


## ```errorCallback()``` - unique to LWC
-  Implement it to create an error boundary component that captures errors in all the descendent components in its tree

![Life cycle](https://resources.docs.salesforce.com/images/57e856aff4175f807fe0ccbf6ad98301.png)