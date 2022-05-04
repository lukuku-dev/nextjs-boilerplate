# Style Guide

## **Typescript**

- using **interface** rather than **type**
    
    ```tsx
    //good
    interface ProductCardProps {
      img: string;
      title: string;
      name: string;
      price: string;
      tags: Array<string>;
    };
    
    //bad 
    type ProductCardProps = {
    ...
    }
    
    ```
    

- using `baseUrl` importing module( no need to dot drilling)
    
    ```tsx
    //good
    import { Container } from "styles/layout";
    
    //bad
    import { Container } from "../../../styles/layout";
    
    //only use relative path with the current file
    //or child of current file
    import { Container } from "./layout";
    ```
    

## React

- for **<the react component>**, **use regular function instead of arrow function**
    
    ```tsx
    //good
    export default function const Home(){
        return <p>its hoem</p>
    }
    
    //bad
    const Home = ()=> {
        return <p>its hoem</p>
    }
    
    ```
    

- for **<the real function(not related with react component>** **use arrow function instead of regular function**
    
    ```tsx
    //good
    const sumNumber = (a,b)=> {
        return a+b
    }
    
    //bad
    funtion sumNumber(a,b){
        return a+b
    }
    ```
    

- Don`t forget to use key for the iteration component
- watch out using index as a key
    
    [https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
    

```tsx
//when map data has its own unique id
{
  todos.map((todo) => (
    <Todo {...todo} key={todo.id} />
  ));
}

//no unique id on data

import { nanoid } from 'nanoid';
...
const todosData = todos.map((todo)=> {
   return {id:nanoid(), ...todo}
})
...
{
  todosData.map((todo) => (
    <Todo {...todo} key={nanoid()} />
  ));
}

// only case when you can use index as a key
// 1. the list and items are static–they are not computed and do not change;
// 2. the items in the list have no ids;
// 3. the list is never reordered or filtered.
// When all of them are met, you may safely use the index as a key.

{
  todosData.map((todo, index) => (
    <Todo {...todo} key={index} />
  ));
}

```

- **Memo**

Use memo for child components, this will avoid child component re-rendering when the parent component state/props are updated by using this method component will only be re-rendered when it’s props are changed.

- **Component**

Always use functional components until unless you really need component lifecycle methods.

- **Functional component custom hooks**

Try to use react built-in and your custom hooks where possible, like React.useCallback , React.useEffect e.t.c, And only call hooks at the top level don’t use them inside look or conditions.

## Styled component

*If you can solve the problem with css , solve it with css .*

- global color theme, you can use css va(—color-blue)
    
    [https://www.joshwcomeau.com/css/styled-components/](https://www.joshwcomeau.com/css/styled-components/)
    

```tsx
//good
const Container = styled.div`
  color: var(--color-primary);
`

//bad
const Container = styled.div`
  color: ${(props) =>props.theme.colors.primary};
`
```
