export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7fe26509b82a44185dd1ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blogsdfasdf-studio',
                  apiId: 'd63ab01f-a703-4c67-b540-4f6df454c044'
                },
                {
                  buildHookId: '5e7fe265baeca096f7845499',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blogsdfasdf',
                  apiId: 'b4c882f4-04a2-48c8-9976-57470bdb5f3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swinner2/sanity-gridsome-blogsdfasdf',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blogsdfasdf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
