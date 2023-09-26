export default function (plop) {
  plop.setGenerator('basics', {
    description: 'create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.css',
      },
    ],
  })
}
