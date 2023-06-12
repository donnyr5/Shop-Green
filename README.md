## Motivation 
Welcome to Shop Green, where your landscape dreams come to life while upholding the principles of environmental consciousness. Imagine you've recently acquired a house with a desert-inspired yard, adorned with cacti and shrubs. However, your vision is to turn it into a thriving rainforest oasis. At Shop Green, we offer you a unique solution that minimizes waste and ensures convenience.

Rather than disposing of your existing plants, Shop Green connects sellers and buyers who are interested in giving these plants a new lease on life. Sellers can find interested individuals seeking cacti for their Mojave-themed backyards, while 
buyers have access to a diverse selection of plant species for their own gardens. By repurposing plants and encouraging reuse, Shop Green not only helps you save money but also contributes to a more sustainable planet.
                     
Say goodbye to tiresome trips to retail stores with limited options. Shop Green provides you with a vast array of affordable and exotic tropical plants, right at your fingertips. No more frustration over unavailable items or exorbitant prices. Our innovative platform ensures that you have access to the plants you desire, bringing the essence of the rainforest directly to your doorstep.

Whether you're an avid gardening enthusiast or a homeowner looking to create an eco-friendly landscape, Shop Green is your trusted solution. Experience the ease and fulfillment of designing your own green paradise while actively contributing to the preservation of our planet. Save time, save money, and embrace a sustainable future with Shop Green. Begin your transformative journey today!

### Deployment

Shop Green is ran with Firebase, so there is a cloud database already existing. 

To access the application, Open terminal and clone this database into a new folder on your desktop

### `mkdir Shop_Green_app` 
The name of this folder is not important: "Shop_Green_App" is just a suggestion. this is where you will store the application on your local machine.

### `cd Shop_Green_app`

### `git clone  https://github.com/donnyr5/Shop-Green.git`

Set current directory to that folder, and run the following commands. Please note that Node Packet Manager is used for these installations. If you do not have these downloaded, refer to https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

To install the necessary dependencies, run (including node_modules)
### `npm install react-firebase-hooks firebase react-router-dom styled-components@5.3.10`

Navigate to the directory for the app
### `cd cd Shop-Green`

To build it, run
### `npm install`

To run the application on your browser (default is port 3000), run
### `npm start`

### How to use Shop Green

At this point you should see the start screen with a button to login. Only users who have logged into with their Google credentials will be able to used the app. Because firebase does not have a good native payment processing system, we have simply enabled users to input how much money they have to spend. Were this app to officially launch, we would implement payment processing instead of having a simple balance. 

Upon the home screen, users can buy, sell, and browse through our inventory. Users can also view their own purchase history, selling history, and all items they are currently trying to sell. Users can also remove items from the marketplace, taking down their listing from the website. The features are pretty intuitive: each item has a name, price, and description which will be input from sellers. Buyers can simply click "purchase" to buy an item, taking it off the marketplace and transferring funds as applicable.

### Thank you for using Shop Green!

