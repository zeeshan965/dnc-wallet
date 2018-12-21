<template>
    <div>
        <div id="sendToken-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
             style="display: none;">
            <div class="modal-dialog modal-lg">
                <div id="sendToken" class="tab-pane active">
                    <ul class="list-unstyled">
                        <li>DinarCoin Balance: 2 DinarCoins</li>
                        <li>DinarCoin Price: $205.32 USD (0.3561627677031908 BTC)</li>
                    </ul>
                    <br>
                    <form action="#" data-parsley-validate="" novalidate="novalidate">
                        <div class="form-group">
                            <label for="userName">Amount of DinarCoin to mint</label>
                            <input type="number" placeholder="1DNC" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="userName">Wallet To Use</label>
                            <select class="form-control">
                                <option>Please Choose</option>
                                <option>BTC - 123345536279</option>
                                <option>ETC - 223444567432</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="userName">Choose your destination for mint :</label>
                            <select class="form-control"><option>Please Choose</option>
                                <option>SmartX Address : 0xc0d594d4dccf49f79e43e427a696678da6bc11ba</option>
                            </select></div><div class="form-group">
                        <label>Your Security Password*</label>
                        <input type="password" placeholder="Security Password" required="required" data-parsley-id="8" class="form-control">
                        <small>Please Confirm the send with your security password</small>
                    </div>
                        <div class="form-group text-right m-b-0">
                            <button type="" class="btn btn-default waves-effect waves-light">
                                Send
                            </button>
                            <button type="reset" class="btn btn-default waves-effect waves-light m-l-5">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div><!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
