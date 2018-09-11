let h = React.createElement;
// h(tag, {props}, [children]);


//Model is information
let posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
]

//View is the component/how the data looks like on the screen

let snakeify = (props) => {
  let newPosts = posts.map(post =>
    (post.title === props.title) ?
      Object.assign({}, post, { title: post.title + 's' })
    :
      post 
  );
  posts = newPosts;
}


let removePost = (props) => {
  return posts = posts.filter(post => post.id !== props.id)
}

let PostRow = (props) => 
  h('li', null, [
    h('h1', {className: 'post-title'}, props.post.title),
    h('button', {
      // className: 'button', 
      onClick: () => {
        // props.post.title = props.post.title + 's';
        snakeify(props.post);
        rerender()
      }
    }, 'Snake-ify'),
    h('p', {className: 'post-author'}, `Posted by: User ${props.post.userId}`),
    h('p', {className: 'post-body'}, props.post.body),
    h('button', {onClick: () => {
      removePost(props.post);
      rerender();
      }
    }, 'Delete'),
  ])

let PostList = (props) =>
  props.posts.map(post =>
    h('ul', {className: 'post-list'}, h(PostRow, { post })),
);

let HomePage = () => {
  return  h('div', null, [
    h('h1', {className: 'header'}, ['Sleeping Belle']),
    h(PostList, { posts })
    ]
  );
}

let rerender = () => {
  ReactDOM.render(
    h(HomePage, null), 
    document.querySelector('.react-root')
  );
}

rerender();

//state: information needed to be able to load the page. Normally refers to data that changes. Page does not change, state changes which alters what renders to the page. Anything that can't be changed is not state. What do I need to save to be able to recreate the page on refresh?
