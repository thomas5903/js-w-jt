import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        filterByPercentChange(percent){
            let filteredGainers = [];
            let controller = this;

            if(percent){
                controller.model.stockGainers.forEach(function(gainer){
                    if(parseInt(gainer.changePercent) > parseInt(percent)){
                        filteredGainers.push(gainer);
                    }
                })
                controller.set('gainers', filteredGainers);
            }else{
                controller.set('gainers', controller.model.stockGainers)
            }
        }
    }
});