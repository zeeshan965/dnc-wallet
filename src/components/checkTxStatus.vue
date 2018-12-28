<template>
 <div >
     <section class="block txstatus__1">
         <article class="row">
             <section class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">
                 <h1 translate="NAV_CheckTxStatus" class="ng-scope">Check TX Status</h1>
                 <p translate="tx_Summary" class="ng-scope">During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. <strong> This is not typically something you can do. It should not be relied upon &amp; will only work when the TX Pools are full. <a target="_blank" rel="noopener noreferrer" href="https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html">Please, read about this tool here.</a></strong></p>
             </section>

             <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                 <input class="form-control ng-pristine ng-untouched ng-valid ng-empty is-invalid" type="text" placeholder="0x3f0efedfe0a0cd611f2465fac9a3699f92d6a06613bc3ead4f786856f5c73e9c" ng-model="txInfo.hash" ng-keyup="$event.keyCode == 13 &amp;&amp; checkTxStatus()" aria-label="TX Hash
" ng-class="Validator.isValidTxHash(txInfo.hash) ? 'is-valid' : 'is-invalid'">
                 <button style="margin: 15px" tabindex="0" role="button" class="btn btn-primary ng-scope" ng-click="checkTxStatus()" translate="NAV_CheckTxStatus">Check TX Status</button>
             </section>
         </article>
     </section>
 </div>
</template>
<script>
    export default{
    }
</script>

<style>
    .block{

    }
    p{
        color: rgba(255, 255, 255, 0.8);
    }
</style>
