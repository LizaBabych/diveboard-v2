import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import pageRoutes from '../src/routes/pagesRoutes.json';
import { firebaseAdmin } from '../src/firebase/firebaseAdmin';
import { MainLayout } from '../src/layouts/MainLayout';
import { AuthLayout } from '../src/layouts/AuthLayout';

const Explore: InferGetServerSidePropsType<typeof getServerSideProps> = ({ user }) => (
  <AuthLayout user={user}>
    <MainLayout>
      <div style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        Explore
      </div>
    </MainLayout>
  </AuthLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const uid = context.req.cookies.__session;

  if (!uid) {
    return {
      redirect: {
        destination: pageRoutes.authPageRout,
        permanent: false,
      },
    };
  }

  const {
    email, photoURL = '', displayName = '',
  } = await firebaseAdmin.auth().getUser(uid);

  return {
    props: {
      user: {
        uid,
        email,
        photoURL,
        name: displayName,
      },
    },
  };
};

export default Explore;
