# Route path definition

You wrote:
path:'/watch?v=id'

React Router doesn’t parse query strings in the path. Instead, you define URL parameters with :id:
path:'/watch/:id'

Then in your component you can read it with:
import { useParams } from 'react-router-dom';

const MainContainer = () => {
const { id } = useParams();
return <div>Watching video {id}</div>;
};

If you really want to use query strings (/watch?v=123), you don’t put them in the route path. Instead, you define:
path:'/watch'

and inside the component use useSearchParams:
import { useSearchParams } from 'react-router-dom';

const MainContainer = () => {
const [searchParams] = useSearchParams();
const id = searchParams.get('v');
return <div>Watching video {id}</div>;
};

✅ Corrected Router Example
import { createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import MainContainer from './MainContainer';

const appRouter = createBrowserRouter([
{
path:'/',
element:<Body/>,
children:[
{
path:'/',
element:<MainContainer/>
},
{
path:'/watch/:id', // or just '/watch' if using query params
element:<MainContainer/>
}
]
}
]);

export default appRouter;

👉 So the fixes are:

- Wrap routes in an array.
- Use :id for dynamic params, or useSearchParams for query strings.

# What is an Action in Redux?

- An action is a plain JavaScript object that describes what happened in your app.
- It must have a type property (string) that tells the reducer how to update the state.
- It can also carry extra data in a payload.

✅ Example of an Action

/ action object
const incrementAction = {
type: "counter/increment",
payload: 1
};

✅ Dispatching Actions
You send actions to the store using dispatch:

import { useDispatch } from "react-redux";

function CounterButton() {
const dispatch = useDispatch();

import { useDispatch } from "react-redux";

function CounterButton() {
const dispatch = useDispatch();

return (
<button onClick={() => dispatch({ type: "counter/increment", payload: 1 })}>
Increment
</button>
);
}

✅ Redux Toolkit (modern way)
With Redux Toolkit, you usually don’t write actions manually. Instead, you define them in a slice:

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
name: "counter",
initialState: { value: 0 },
reducers: {
increment: (state) => { state.value += 1 },
decrement: (state) => { state.value -= 1 },
addByAmount: (state, action) => { state.value += action.payload }
}
});

export const { increment, decrement, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;

Then dispatch like:
dispatch(increment());
dispatch(addByAmount(5));

# check functionality of return somethinf from useEffect

✅ What the return means
useEffect(() => {
// effect logic here

return () => {
// cleanup logic here
};
}, []);

- The return is not a rerender trigger.
- It’s a cleanup function that React will call:
- Before the effect runs again (if dependencies change).
- When the component unmounts (to clean up side effects)

# IMPORTAMT

- search section

# Note

1- add css to insert data from below
2- unshift in js is used to add data from the back
3- use of slice on chatComponent.jsx file - when we genearet live chat which is infinite chat we make that restrict in our dom through slice other wise all the adat is saved on our dom and it's heavy loaded it stores last 20 data.
