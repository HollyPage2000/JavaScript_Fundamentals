// You are helping your friend, who owns a candies business, with their website. 
// Every order placed on the website gets assigned an order ID, such as 1274.
// Your friend would like to create batches of five order IDs. 
// They ask you if you could give a hand and write a small program to do this.

function createBatch(orders) {
        let orderIds = [];
        for (const order of orders) {
            orderIds.push(order.orderId);
            if (orderIds.length === 5) {
            return orderIds;
            }
        }
        }

const orders1 = [
    {orderId: 1274}, {orderId: 1275}, {orderId: 1276}, {orderId: 1277}, {orderId: 1278}];

console.log(createBatch(orders1));
