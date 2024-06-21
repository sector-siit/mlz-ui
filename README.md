# MLZ-UI
# Introducción

MLZ-UI es una librería de componentes de React que se utiliza en los proyectos de MLZ. Está basada en Storybook y se puede instalar en cualquier proyecto de React.

## Instalar
npm
```bash
npm i @sector.siit/mlz-ui
```
pnpm
```bash
pnpm i @sector.siit/mlz-ui
```
yarn
```bash
yarn add @sector.siit/mlz-ui
```


### **Modo de uso**

Importa los componentes que desees en tu UI

`import { Alert, Button, Card } from "@sector.siit/mlz-ui";`

### **Ejemplo de uso**

```jsx
  const example = () => (
    <div>
      <Alert message="Error de algun type" type="error" />
      <Button variant="outlined">Click aqui</Button>
      <Button variant="outlined">Click aqui</Button>
    </div>
  )
```



### **Recursos**
- [GitHub repository](https://github.com/sector-siit/mlz-ui)