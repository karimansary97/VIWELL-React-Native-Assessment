# VIWELL-React-Native-Assessment
 React Native application to list products, show product details and maintain wishlist.
 
## Demo
https://github.com/user-attachments/assets/28a3d45b-fefe-4ab4-b2c9-39fdc9a6f1aa

## Pagenation and Select data for better performance .
Add Infinty scroll to enhance performance and use select to pick the data i want from the api to decrase size of request.

https://github.com/user-attachments/assets/49019ac9-91aa-4bef-a6e8-54d36854a399

## Structure
- Src folder will be the core application source code.

### Screens
- Include Screen of app like products and wishlist

### Redux
- Include Store , slices and queries

### Components
- Have UIElements related to ui .
- Business components will be directly under the components folder.

### Hooks
 - Custom hooks.

### Navigation
- MainNavigation with native stack .
- TabNavigation with bottom nav .

### Types
- Global shared types.

### Helpers
- Functions.
- Common uses.

### styles
- Styles configs and constants.

### Assets
- include Icons and etc ...


## Installation

Install my-project with yarn

  1. Clone the repository:

```bash
https://github.com/karimansary97/VIWELL-React-Native-Assessment.git
```
  2. Navigate into the project directory:

```bash
cd your-folder 
```
  3. Install dependencies:

```bash
yarn install
```
  4. You need to install expo also :

```bash
npm install -g expo-cli
```
## Addtitonal step 
for ios .

```bash
npx pod-install
```
create .env file and add this line :

```bash
EXPO_PUBLIC_API_URL=https://dummyjson.com
```

## Run Project 

To run project:
```bash
  yarn start
```

## Running Tests

We use unit-test and e2e test.

1. To run e2e test , run the following command.

```bash
 yarn e2e:test-ios //for ios 
 yarn e2e:test-android // for android 
```

### E2e Demo For ios 
  
https://github.com/user-attachments/assets/256ee0ed-83b9-4d1f-b8a0-3ee8dbfc7bd1

Result appear in image .

![Screenshot 2024-09-06 at 7 54 49 AM](https://github.com/user-attachments/assets/ec24b9c4-6a86-4001-a0e9-6c8d96876636)

### E2e Demo For Android 

https://github.com/user-attachments/assets/02ea5974-32f6-43c2-93d4-f0e0b007fc42

Result appear in image.

![Screenshot 2024-09-06 at 7 58 28 AM](https://github.com/user-attachments/assets/623523f5-4109-4f74-a9af-a16de1909636)

### unit test for queries and critical function 

1. TO RUN unit test.

 ```bash
yarn unit-test
```
Result appear in image. 
![Screenshot 2024-09-06 at 4 34 28 PM](https://github.com/user-attachments/assets/470dcc3e-6b25-4def-b69a-04c85b0db891)



