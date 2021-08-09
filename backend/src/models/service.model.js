// 1. Feladat: pótold a service modellt.
/*

export class Service {
  _id: string = '';
  name: string = '';
  since: number = 0;
  street?: string = '';
  city?: string = '';
  country?: string = '';
  active?: boolean = true;
}
*/
const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    since: {
        type: Number,
        required: true
    },
    street: {
        type: String,        
    },
    city: {
        type: String,        
    },
    country: {
        type: String,        
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('service', ServiceSchema);
