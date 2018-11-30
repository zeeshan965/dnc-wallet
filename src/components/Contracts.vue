<style scoped>
    input, select, textarea, button{
        border-radius:0px;
        height:40px;
    }
    .form-group label{
        font-size:16px;
    }
    textarea{
        height:150px;
    }
    .container.text-left{
        padding-bottom:60px;
    }
</style>
<template>
    <div>
        <div class="content m-t-40">
            <div class="container text-left">
                <div class="row">
                    <div class="col-md-4 col-md-offset-2">
                        <div class="form-group">
                            <label>Contract Address</label>
                            <input type="text" class="form-control" placeholder="notopia.eth or 0xD3E00087">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Select Existing Contract</label>
                            <select class="form-control">
                                <option>Select a contract ...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="form-group">
                            <label>Abi / JSON Interface</label>
                            <textarea class="form-control" placeholder='[{ "type":"contructor", "inputs": [{ "name":"param1", "type":"uint256", "indexed":true }], "name":"Event" }, { "type":"function", "inputs": [{"name":"a", "type":"uint256"}], "name":"foo", "outputs": [] }] '></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div class="form-group">
                            <button class="btn btn-lg btn-primary" @click="step = 2">Access</button>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="step == 2">
                    <div class="col-md-8 col-md-offset-2">
                        <h3>Read / Write Contract</h3>
                        <div class="form-group">
                            <select class="form-control">
                                <option value="">Name</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" value="Adshares Token">
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                step: 1
            }
        }
    }
</script>