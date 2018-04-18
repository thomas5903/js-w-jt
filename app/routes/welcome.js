import Ember from 'ember';
import RSVP from 'rsvp';

import toPercent  from "../utils/to-percent";

let stockGainersUrl = "https://api.iextrading.com/1.0/stock/market/list/gainers";
let stockLosersUrl = "https://api.iextrading.com/1.0/stock/market/list/losers";

export default Ember.Route.extend({

    model(){
        return RSVP.hash({
            stockGainers: Ember.$.get(stockGainersUrl),
            stockLosers: Ember.$.get(stockLosersUrl),
        });
    },

    setupController : function(controller, model) {
        controller.set('model', model)
        controller.set('gainers', toPercent(model.stockGainers));
        controller.set('losers', toPercent(model.stockLosers));
    }
});
