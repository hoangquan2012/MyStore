import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layouts';
const PublicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Profile', component: Profile, layout: HeaderOnly },
    { path: '/Upload', component: Upload, layout: null }
];

export { PublicRoute };
