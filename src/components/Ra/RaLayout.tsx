// in MyLayout.js
import { Layout } from 'react-admin';

import { RaAppBar } from './RaAppBar';

export const RaLayout = (props: any) => <Layout {...props} appBar={RaAppBar} />;
