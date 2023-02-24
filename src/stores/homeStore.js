import axios from 'axios'
import { create } from 'zustand'

const homeStore = create((set) => ({
coins: [] ,

    fetchCoins: async() => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/shibapoconk?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
        console.log(res.data.market_data.current_price.usd);
        console.log(res.data.market_data.price_change_24h);

        let p_array = null;
        let q = JSON.stringify(res.data.market_data.price_change_percentage_24h);
        let p = JSON.stringify(res.data.market_data.current_price.usd);
        if (p.indexOf('e-')>=0) {
            p_array = p.split('e-');
            let z = p_array[0].replace('\.','');
            for (let x = 0; x < parseInt(p_array[1]); x++) {
                z = "0"+z;
            }
            p = "0."+z;
        } 
        console.log(q);
        if (q.indexOf('e-')>=0) {
            p_array = q.split('e-');
            q = p_array[0];
            console.log(q);
        } 
        let c = 'green';
        if (q.indexOf("-")>=0) {
            c = 'red';
        }

        const coins = {
            price: p,
            h24: parseFloat(q,).toFixed(2),
            colour: c,
        }

        set ({coins});
    }
}))

export default homeStore