Q1. What problem does the context API help solve?

	A1. It allows us to store data in a context object instead of passing down data from component to component (prop-drilling).
 
Q2.  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	A2. Actions are Redux’s source of information. They have an action type and can have data associated with it with payload. Reducers are pure functions that take the previous state and action and return the next state. Store, stores all the states of the app and makes the immutable (can’t mutate original state). That is why it is known as the single source of truth in the application.
 
Q3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

	A3. Application state is global while Component state is local. Component state is best used when the data does not have to reach outside of its component and only needs to pass data from parent to child and. Application state is best when an app needs to grab data from other components.
 
Q4.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

	A4. Redux thunk is middleware that enables you to handle asynchronous operations inside action creators. It can make action creators asynchronous.
 
Q5.  What is your favorite state management system you've learned and this sprint? Please explain why!

	A5. Neither. They both irritate me equally. Context seems easier to use but that is when you have a good grasp of it (which I don’t yet). Redux seems cleaner in my opinion but I can get turned around easily with that as well. Still learning how to handle them.
