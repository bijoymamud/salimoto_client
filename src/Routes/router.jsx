import { createBrowserRouter } from "react-router-dom";
import DashboradLayout from "../Pages/Dashboard/DashboradLayout";
import Login from "../Pages/Authentication/Login";
import NotFound from "../Pages/NotFound/NotFound";
import { AdminHome } from "../Pages/Dashboard/AdminHome/AdminHome";
import AudioLibrary from "../Pages/Dashboard/AudioLibrary";
import Category from "../Pages/Dashboard/Category";
import Settings from "../Pages/Dashboard/Settings";
import DuaManagement from "../Pages/Dashboard/DuaManagement";
import { RecentContentDetails } from "../Pages/Dashboard/AdminHome/RecentContentDetails";
import DuaForm from "../Pages/Dashboard/AdminHome/DuaForm";
import { AuthGuard } from "../components/AuthGuard";
import HadidManagement from "../Pages/Dashboard/AdminHome/HadidManagement/HadidManagement";
import HadithForm from "../Pages/Dashboard/AdminHome/HadidManagement/HadithForm";
import { HadithDetails } from "../Pages/Dashboard/AdminHome/HadidManagement/HadithDetails";
import VideoLibrary from "../Pages/Dashboard/VideoLibrary/VideoLibrary";
import VideoDetails from "../Pages/Dashboard/VideoLibrary/VideoDetails";
import VideoForm from "../Pages/Dashboard/VideoLibrary/VideoForm";
import { MediaAds } from "../Pages/Dashboard/MediaAds";




export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },


  //admin dashboard portion

  {
    path: "/",
    element: <AuthGuard><DashboradLayout /></AuthGuard>,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "content_details/:id",
        element: <RecentContentDetails />,
      },
      {
        path: "dua_details/:id",
        element: <RecentContentDetails />,
      },
      {
        path: "dua_management",
        element: <DuaManagement />,

      },
      {
        path: "dua_management/dua_details/:id",
        element: <RecentContentDetails />,
      },

      //for edit dua
      {
        path: "edit_content/:id",
        element: <DuaForm />,
      },

      //add dua
      {
        path: "dua_management/add_dua",
        element: <DuaForm />,
      },

      {
        path: "dua_management/edit_dua/:id",
        element: <DuaForm />,
      },



      //hadith part section

      {
        path: "hadith_management",
        element: <HadidManagement />,
      },

      //add dua
      {
        path: "hadith_management/add_hadith",
        element: <HadithForm />,
      },

      {
        path: "hadith_management/hadith_details/:id",
        element: <HadithDetails />,
      },

      {
        path: "hadith_management/edit_hadith/:id",
        element: <HadithForm />,
      },

      {
        path: "audio_library",
        element: <AudioLibrary />,
      },

      //video part section
      {
        path: "video_library",
        element: <VideoLibrary />,
      },
      {
        path: "video_library/video_details/:id",
        element: <VideoDetails />,
      },
      {
        path: "video_library/add_video",
        element: <VideoForm />,
      },
      {
        path: "video_library/edit_video/:id",
        element: <VideoForm />,
      },
      {
        path: "media_ads",
        element: <MediaAds />,
      },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "settings",
        element: <Settings />,
      }
    ],
  },



  //error path
  {
    path: "*",
    element: <NotFound />,
  },
]);
