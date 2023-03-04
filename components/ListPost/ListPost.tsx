import React from 'react';
import styles from '~/components/ListPost/list-post.module.scss';
import Section from '../Section/Section';
import PostItem from './PostItem/PostItem';

const fakePostsData = [
  {
    id: 1,
    title: '[12] - Nginx in Real World  1',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: '[12] - Nginx in Real World Hello 2',
    createdAt: new Date(),
  },
  {
    id: 3,
    title: '[12] - Nginx in Real World (How to make nginx work) 3',
    createdAt: new Date(),
  },
  {
    id: 4,
    title: '[12] - Nginx in Real World (How to make nginx work) 4 lrem lrem lrem',
    createdAt: new Date(),
  },
  {
    id: 5,
    title: '[12] - Nginx in Real World (How to make nginx work) 5',
    createdAt: new Date(),
  },
];

const PostList = () => {
  return (
    <>
      {/* Newest */}
      <div className={styles.fragment}>
        <Section
          name="Newest"
          link={{
            path: '/',
            textHolder: 'See all posts',
          }}
        />
        <div className={styles.listPost}>
          <div className="grid wide">
            <div className="row">
              <div className="col l-12 m-12 c-12">
                <div className="row">
                  {fakePostsData.map((item) => (
                    <div className="col l-3 m-4 c-12" key={item.id}>
                      <PostItem
                        id={item.id}
                        title={item.title}
                        createdAt={item.createdAt as Date}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Viewed */}
      <div className={styles.fragment}>
        <Section
          name="Viewed"
          link={{
            path: '/',
            textHolder: 'See all posts',
          }}
        />
        <div className={styles.listPost}>
          <div className="grid wide">
            <div className="row">
              <div className="col l-12 m-12 c-12">
                <div className="row">
                  {fakePostsData.map((item) => (
                    <div className="col l-3 m-4 c-12" key={item.id}>
                      <PostItem
                        id={item.id}
                        title={item.title}
                        createdAt={item.createdAt as Date}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
