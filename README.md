coding style
```
for the react component, use regular function(not arrow function)
//bad
const Home = ()=> {
    return <p>its hoem</p>
}

//good
export default function const Home(){
    return <p>its hoem</p>
}




and for the real function(not related with react compoennt,) use arrow function
//bad
funtion sumNumber(a,b){
    return a+b
}

//good
const sumNumber = (a,b)=> {
    return a+b
}

---------

we are using on typescript with baseUrl,
so we dont need to drilling import module, we can access it from the baseUrl

//bad
import { Container } from "../../styles/layout";

//good
import { Container } from "styles/layout";

```







- Node js (v.16 + )
- Typescript
- React
- Nextjs 
- npm / yarn



run dev
- yarn dev
- cypress open


#### for e2e testing 
->  cypress


#### for css writing
-> Styled component
->  styled system

#### for api call
->  SWR


#### for global state system
->  Recoil



#### for clean code & code style
-> atomic design
https://bradfrost.com/blog/post/atomic-web-design/

-> pure function
https://www.geeksforgeeks.org/pure-functions-in-javascript/

->  custom hooks
https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
https://github.com/rehooks/awesome-react-hooks

-> function component > class component





#### for design pattern
example:
- pages/home.tsx
- component/
--components/home/Title.tsx
--components/home/Message.tsx
--components/home/utils.ts
--components/home/atom.ts
