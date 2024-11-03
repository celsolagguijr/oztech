import react from '@assets/tech_stack/react.svg';
import vue from '@assets/tech_stack/vue.svg';
import materialUI from '@assets/tech_stack/material-ui.svg';
import tailwind from '@assets/tech_stack/tailwind.svg';
import antdesign from '@assets/tech_stack/ant-design.svg';
import redux from '@assets/tech_stack/redux.svg';
import laravel from '@assets/tech_stack/laravel.svg';
import nodejs from '@assets/tech_stack/node-js.svg';
import typescript from '@assets/tech_stack/typescript.svg';
import express from '@assets/tech_stack/express.svg';
import java from '@assets/tech_stack/java.svg';
import springboot from '@assets/tech_stack/spring.svg';
import mysql from '@assets/tech_stack/mysql.svg';
import postgresql from '@assets/tech_stack/postgresql.svg';
import docker from '@assets/tech_stack/docker.svg';
import figma from '@assets/tech_stack/figma.svg';
import git from '@assets/tech_stack/git.svg';

export type TechStack = {
  name: string;
  img: string;
  tags: string[];
};

const tech_stack: TechStack[] = [
  {
    name: 'React',
    img: react,
    tags: ['frontend'],
  },
  {
    name: 'Redux',
    img: redux,
    tags: ['frontend'],
  },
  {
    name: 'Vue',
    img: vue,
    tags: ['frontend'],
  },
  {
    name: 'Material UI',
    img: materialUI,
    tags: ['frontend'],
  },
  {
    name: 'TailwindCSS',
    img: tailwind,
    tags: ['frontend'],
  },
  {
    name: 'Ant Design',
    img: antdesign,
    tags: ['frontend'],
  },
  {
    name: 'Laravel',
    img: laravel,
    tags: ['backend'],
  },
  {
    name: 'Node.js',
    img: nodejs,
    tags: ['backend'],
  },
  {
    name: 'Typescript',
    img: typescript,
    tags: ['frontend', 'backend'],
  },
  {
    name: 'Express.js',
    img: express,
    tags: ['backend'],
  },
  {
    name: 'Java',
    img: java,
    tags: ['backend'],
  },
  {
    name: 'Spring Boot',
    img: springboot,
    tags: ['backend'],
  },
  {
    name: 'MySQL',
    img: mysql,
    tags: ['database'],
  },
  {
    name: 'PostgreSQL',
    img: postgresql,
    tags: ['database'],
  },
  {
    name: 'Docker',
    img: docker,
    tags: ['deployment'],
  },
  {
    name: 'Figma',
    img: figma,
    tags: ['design'],
  },
  {
    name: 'Git',
    img: git,
    tags: ['version control'],
  },
];

export default tech_stack;
