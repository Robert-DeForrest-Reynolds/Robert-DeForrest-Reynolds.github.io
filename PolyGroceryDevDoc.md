<style>
td { vertical-align: top; width:25%;}
CoreHeading { color: green; font-size: 64px; }
InformationHeading  { color: purple }
</style>

<table>

<td><CoreHeading> Focuses </CoreHeading>

- **<u>High-Stability</u>** Code Base, **<u>Extensible</u>**, and Easy to Understand
	- I want players to be able to modify NPC behavior, economic systems, etc., so we ourselves can study, and tweak over time the default/standard
- **Large** Product Index
	- Release new Product Licenses in groups of 6 minimum
	- Brand Licenses are bought, and then you can order products from that brand, some items will be locked behind player level requirements, or loyalty requirements with the brand
	- Brand Licenses can have different levels, never going above 4, for example Kochtec 1, Kochtec 2, Kochtec 3, Kochtec 4, or Scentie 1, Scentie 2, Scentie 3
	- Products are not desired or expected by customers until they've been on the floor at least once
	- Food, Hygiene, Cosmetic, Clothing, Entertainment, Automotive, Electronic, Furniture, and more
	- I want this to feel like a collectible game on the side, the ability to get all products, and large stable inventories of them is of great importance
- Stable Framerate During High-Level Gameplay
	- I want at minimum 60 FPS *easy* on a load end computer
- *Large* Expansion Potential
	- I want you to be able to expand your store nightmarishly large

Every month I want to release a very thoughtful devlog written by me. I don't want to do this any earlier, or later, as I feel a month is a long enough wait as a consumer, and is a small enough timespan still to provide a short-form, consumable piece of media.

I'd like to make "package releases" of the new items we bring in, I'd like these to be scheduled, and maybe even road-mapped, and occasionally themed for holidays, and such.

The player is going to store with a more convenient store scale store, and move up toward a budget outlet store, and onward to a Safeway/Walmart Scale store, to a Costco/Winco size store, and past to the size of a nightmarish store.

We hope to create ideas that essentially compressing or compartmentalizing complex problems to solve late-game scale problems, like online orders from customers, instead of in-person customers to reduce AI use, and visual objects. Auto-stocking shelving units that can be supplied from above or below when utilizing multiple floors. We can steal a lot of real-life logistics ideas for solving these problems, and even implement unrealistic ways to solve these problems like robots, conveyors, drones, or other technology.
</td>

<td> <CoreHeading> Demo Goals </CoreHeading>

- Customer Shopping
- Checking Out
- Upgrading Area
- Buying Shelves, Lights, and Storage Shelves
- Buying Products, and Restocking
- Hiring Employees
	- Assigning
	- Restocking
	- Checking Out
- Controlling Store Hours
	- Opening/Closing
- Bank
	- Loans
- 12 Unique Items
- Audio & Sound Effects
</td>

</table>

# Core Documentation

## <InformationHeading> Brand Names </InformationHeading>
- TruePicks - Kitchen Products, and Appliances
	 - Aluminum Foil
	 - Plastic Wrap
	 - Plastic Silver Ware
	 - Food Storage Bags
	 - Trash Bags
 - Opaera
	 - Cereal
	 - Milk
	 - Granola Bars
 - Scentie - Scent Company
	 - Air Freshener
	 - Candles
	 - Deodorant
	 - Perfume
	 - Cologne
- PremiumPro - Cleaning Supplies
- UltimateU - Personal Hygiene
- Brookestone Farms - Dairy Products
- PoroDent - Dental Company
	- Tooth Brushes
	- Tooth Paste
	- Mouth Wash
- Merry's Juices
	- Orange Juice
	- Apple Juice
	- Grape Juice
	- Cranberry Juice
	- Cran-Grape Juice
- Fiore - Baking Products & Goods
	- Flour
	- Sugar
	- Powdered Sugar
	- Cocoa Powder
	- Spaghetti Pasta
	- Linguine Pasta
	- Fettucine Pasta
- Coko - Candy Company
	- Chocolate Bars
	- Sour Candies

## <InformationHeading> Terminology </InformationHeading>

**Store Floor**
>The area that customers shop within. The center of the game world is the center of the player's store, and the store expands from there center.

**Operations Floor**
>Any area outside of the Store Floor that is still within the store. Operations floor is where storage shelves, breakrooms, logistics equipment is built as well as anything else operations related that the customer should not see.

Player Storage
>Any area outside 

## <InformationHeading> Top Down Map </InformationHeading>
There will be a top down 2D map that depicts the store. It has a key, that can be customized, and added to. The player can manage their department locations, and more through this map.

## <InformationHeading> Store Construction System </InformationHeading>
The floor, and walls are solid objects that cannot be passed through.
There is no global grid, and there will never be a global grid. We will use snapping tools to provide fine-tuned, precision placement of items.

#### Sister-Snapping

Snapping of All Placeable Items
	 - Universal Grid Snapping, or Snapping to "Related" Items, for example shelves to shelves, or fridges to fridges
	 - Ctrl to snap to universal grid. When looking when a placed item, will check if item being placed is related to the item your looking at, if so will snap to it's edge, this is default behavior, and does not require holding any buttons

## <InformationHeading> Departments </InformationHeading>
The player will be able to unlock, and purchase subdepartments that will attach to the outside of the store by default. The player will be able to build them custom any where on the store floor as long specific parameters are fulfilled, but as this will be complicated, and only for the most dedicated, the default will be to attach them to the outside, and make them as well expandable. If the player does choose to build there department location on the store floor, if the external department room has no registers, it will automatically become part of the operations floor.
- Deli
- Bakery
- Florist
- Butcher
- Coffee shop

---
# Unorganized
- Parking: in development parking will only be an upgradable number that we will visually implement down the line, like cars parking, and people getting out, etc.
 - Customer Randomly Pathfinding to Shelves
	 - Customer amount is determined by lower bound being (Player Level + Total Unique Products + Store Cleanliness + Parking Amount)/2, round up, and the upper bound is (Player Level + Total Unique Products + Store Cleanliness + Parking Amount)
	 - Make a list of all shelves available, and within those shelves, a list of each shelve
	 - Randomly generate a list of tuples that contain two integers that represent random indexes into the list of shelves, and the sub-list of each shelve within, this will be used to randomly select the products
	 - We will then have the character look at the shelves per index, and move toward it
	 - The amount of items a customer will buy will be minimum 1, and the maximum will be determined by (Player Level + Total Unique Products + Price Taste + Store Cleanliness Score)
- Price Taste is the trait NPC's have to determine how they favor a price. Some people prefer higher prices as they think it represents quality, but other prefer fair, or lower prices because they prefer the cheaper product. Price taste is an additive stat, and should not affect the game too much.
- Item Pricing
	- Item Pricing is Determined in a Tab in the Tablet, or by interacting with the price tag on a shelve
- Aisle Signs: Mid Game Decoration for when the player starts to create actual aisles
- Basic Shelves, and Customer Interaction
	- Customers pull item from the shelve
- Fridges & Freezers
	- Require upkeep for their power
- Complaints Board
	- Customers can leave reviews that items are out of stock, too expensive, or
- Cash Register Interaction
	- USD currency
	- Can use left mouse to click for single, middle mouse click for 5, right mouse to remove
	- Can use scrolling of middle mouse to increment or decrement
- Card Interaction
	- We don't take the card anymore, so we're not doing that, we're putting the numbers into the register, and the customer is sliding their card
- Building mode: toggled using B key, allows player to customize wall, floors, item colors, create doorways, and more
- Tablet to Manage Business, Stock, etc.
	- Inventory Display
		- On Shelves
		- In Storage
	- Ordering Tab
	- Receipt and Order History
	- Calendar
		- Breakdowns
		- Receipts, and Orders by Day
	- Managing Tab
		- Hire, Fire Employees
		- Buy Items
			- Forklifts, Shelves, Fridges, Freezers
		- Expand Store
			- I want you to be able to expand this store to the size of a Costco, carrying any item one could think of. It is low on priority, but eventually selling even entertainment, and electronics would be amazing. This would require custom shelving, boxes, but it could be managed I believe.
		- Change Name
- Perma-day, there is a day/night cycle, and there are day counts, but it does not act as a phase, or end. You can close temporarily if you need to stem chaos, or well, just breathe, but you are open 24 hours by default, and are in continuous play.
	- Calendars exist, and you can see revenue by day in breakdowns, and there are monthly, and annual fees like rent, taxes, electricity, etc.
	- Maybe make it so the player can set the store hours to automatically close at certain times?
- Employees
	- Associates be assigned to cashiering, stocking, or cleaning, or work between all 3
	- Department Specialists: these employees can be hired for specific departments like the deli, bakery, pharmacy, or coffee shop
	- Pay to train employees in certain skills like automated price adjustments
- Automated Orders: the player can schedule repeat orders
- Self Checkout: expensive, but allows employees to focus on other tasks, and keep employee cost, and count low, late-game
- Notepads, and Restock List
- Storage Room, need to devise a system and plan of execution
	- Shelves
		- Organize, and stack boxes of multiple products, very early game
	- Pallets
		- Organize, and stack boxes of singular products, mid game
	- Pallet Shelving
		- Organize, and stack pallets of boxes of singular products, late game
- Delivery Bay
	- Unlock large form deliveries where a truck pulls in and delivers large pallets you, or employees can pull from
- Discord
	- A thread dedicated to displaying what will NOT be in the game, and what is in progress, what is being voted, or discussed upon, etc.
- Quest/Achievements
- Lighting Placements
	- Lighting will also cost money due to electricity need
- Debug Menu
	- Total Customer in Store
	- Total Products, etc.
- Calculator
- Download, and shop at other players stores
	- This can be done through making stores exportable as downloadable stores one can explore, and play on
- Loans
- Angel Investors
	- NPC's that randomly come in the store and offer you a deal: a large amount of money, in return for a percentage of sells for a certain timeframe
- Stories, Elevators, Multiple Floors
- Plan-o-grams, or top down floor plan designs for planning
- Security Cameras, Player Can Use Them for Perspective of the Store
- Employee Stress Responses
	- Strike
	- Hiding
	- Sitting in Bathroom
- Bathroom requirements for employees
- You'll have to schedule employee breaks, and they will randomly use the bathroom 

# Programming Architecture
