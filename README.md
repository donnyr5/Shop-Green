## Motivation 

Imagine you bought a house that is landscaped like a desert, with cactus and small shrubs dotting the yard, and you want to redo it to look like a rainforest. Rather than wasting perfecty good plants by simply removing and discarding them, you could instead sell them on Shop Green to someone looking to purchase cactus for their mojave-themed backyard. And rather than driving to the Home Depot to purchase expensive, or highly exotic tropical plants for your garden that might not be in stock, you could buy them from Shop Green. This revolutionary app will save time, money, and the planet!


### Deployment

Shop Green is ran with Firebase, so there is a cloud database already existing. 

To access the application, Open terminal and clone this databse into a folder on your desktop
### `$ git clone  https://github.com/donnyr5/Shop-Green.git`

Set current directory to that folder, and run the following commands. Please note that Node Packet Manager is used for these installations. If you do not have these downloaded, refer to [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm].

To install the necessary dependencies, run
### `$ npm install react-firebase-hooks firebase react-router-dom styled-components`

To build it, run
### `$ npm install`

To run the application on your browser (default is port 3000), run
### `$ npm start`

### How to use Shop Green

At this point you should see the start screen with a button to login. Only users who have logged into with their Google credentials will be able to used the app. Because firebase does not have a good native payment processing system, we have simply enabled users to input how much money they have to spend. Were this app to officially launch, we would implement payment processing instead of having a simple balance. 

Upon the home screen, users can buy, sell, and browse through our inventory. Users can also view their own purchase history, selling history, and all items they are currently trying to sell. Users can also remove items from the marketplace, taking down their listing from the website. The features are pretty intuitive: each item has a name, price, and description which will be input from sellers. Buyers can simply click "purchase" to buy an item, taking it off the marketplace and transferring funds as applicable.

### Thank you for using Shop Green!

