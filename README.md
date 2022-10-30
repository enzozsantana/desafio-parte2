<h1 align="center">Interface para marcar destinos de interesse</h1>

![formulario-validacao-1](https://user-images.githubusercontent.com/89364741/198857574-b785ff05-f575-4b0e-93db-3bd91fa701a0.png)
![formulario-validacao-2](https://user-images.githubusercontent.com/89364741/198857575-a253c9bf-e92c-417f-8b90-a474ffdced9e.png)
![formulario-validacao-3](https://user-images.githubusercontent.com/89364741/198857576-5f75eb45-c3ea-452b-ae64-d3d3edff5f25.png)
![formulario-validacao-4](https://user-images.githubusercontent.com/89364741/198857577-6da72d7b-8573-4cd0-8425-aa2c2b8d7108.png)
![formulario-validacao-5](https://user-images.githubusercontent.com/89364741/198857578-efcdc0cc-df2b-48a0-ad57-6592d442d419.png)
![formulario-validacao-6](https://user-images.githubusercontent.com/89364741/198857702-3afcba48-e37f-4a0a-9a17-9355a89e198a.png)

## :page_facing_up: Descrição
<p>Interface web, feita em React, para marcar destinos de interesse.</p>
<p>Estão presentes os seguintes campos: Nome, Email, Telefone, CPF, País e Cidade (todos obrigatórios).</p>

* Os campos de País e Cidade permitem a seleção de múltiplas opções.
* Para popular o select de países, os mesmos foram buscados na API (🔗 https://amazon-api.sellead.com/country).
* As cidades foram buscadas na API (🔗 https://amazon-api.sellead.com/city), porém elas foram populadas condicionadas aos países selecionados.
* Foram aplicadas validações, em todos os campos, e máscaras, nos campos Telefone e CPF.
* Quando o formulário é submetido com sucesso, o usuário recebe um retorno visual do mesmo.

## :hammer_and_wrench: Ferramentas
* ReactJS
* React Hook Form
* React Select
* React Toastify
* Yup

## :computer: Deploy
* O deploy desse projeto foi feito na plataforma Vercel. Para usar a aplicação, basta clicar no link: 🔗 https://formulario-validacao.vercel.app/
* Pasta build zipada: [build.zip](https://github.com/enzozsantana/formulario-validacao/files/9896952/build.zip)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
