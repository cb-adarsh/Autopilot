<template>
  <div>
    <Navbar/>
    <div
      class="rs-logs rs-logs--full"
      v-for="log in logs"
      :key="log.id">
      <div class="my-flex" style="align-items: center;">
        <div class="is-size-5" style="margin-right: 16px">Workflow {{rand()}}</div>
        <b-tag rounded class="my-tiny-text" :class="{'is-success':log.success,'is-danger':!log.success}">
          {{log.success ? 'SUCCESS' : 'FAILED'}}
        </b-tag>
      </div>
      <div class="my-flex">
        <div><b>{{log.count}}</b> records affected</div> &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="is-size-6">Last ran at {{getFormattedDate(log.lastRunAt)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";

    export default {
        name: 'Logs',
        data() {
            return {
                logs: [
                    {
                        "_id": "5df4b4e0cec13267e8fea23c",
                        "success": true,
                        "lastRunAt": "Thu Jan 12 1989 15:03:45 GMT+0000 (UTC)",
                        "count": 32
                    },
                    {
                        "_id": "5df4b4e0ec1b065ab57cfc54",
                        "success": true,
                        "lastRunAt": "Thu May 18 1989 18:27:25 GMT+0000 (UTC)",
                        "count": 38
                    },
                    {
                        "_id": "5df4b4e0509d02bb7857e693",
                        "success": false,
                        "lastRunAt": "Thu May 07 2009 14:22:03 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e090a681f39a0e9912",
                        "success": true,
                        "lastRunAt": "Tue Feb 09 1982 00:28:17 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e071499bdd6bb34eb2",
                        "success": false,
                        "lastRunAt": "Mon Sep 28 2009 10:43:55 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e06674525cd6f04981",
                        "success": false,
                        "lastRunAt": "Sat Nov 29 2008 21:53:44 GMT+0000 (UTC)",
                        "count": 20
                    },
                    {
                        "_id": "5df4b4e0e184516ab6c77473",
                        "success": false,
                        "lastRunAt": "Sun Mar 11 1990 20:33:15 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e0cdbe44c827e0ca68",
                        "success": false,
                        "lastRunAt": "Thu Nov 25 1971 08:13:38 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e08690350c32190150",
                        "success": false,
                        "lastRunAt": "Mon Oct 31 2016 16:05:15 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e08833305a63fa2f71",
                        "success": true,
                        "lastRunAt": "Tue Dec 21 1999 18:09:37 GMT+0000 (UTC)",
                        "count": 30
                    },
                    {
                        "_id": "5df4b4e0ff234a1d23faa430",
                        "success": true,
                        "lastRunAt": "Mon Dec 17 2001 07:44:20 GMT+0000 (UTC)",
                        "count": 23
                    },
                    {
                        "_id": "5df4b4e00a491bc8068c3c97",
                        "success": false,
                        "lastRunAt": "Mon Oct 21 2002 13:49:31 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e01449ba30a67a97e9",
                        "success": true,
                        "lastRunAt": "Sun Sep 01 1991 04:30:05 GMT+0000 (UTC)",
                        "count": 40
                    },
                    {
                        "_id": "5df4b4e0c124442c9de9cd62",
                        "success": true,
                        "lastRunAt": "Sat May 08 2004 02:47:22 GMT+0000 (UTC)",
                        "count": 27
                    },
                    {
                        "_id": "5df4b4e0fdabb869a0583eef",
                        "success": true,
                        "lastRunAt": "Wed Dec 03 1975 14:51:44 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e0c51920093caa2d3e",
                        "success": false,
                        "lastRunAt": "Wed Oct 14 1987 22:22:07 GMT+0000 (UTC)",
                        "count": 22
                    },
                    {
                        "_id": "5df4b4e0a983403c2c18e4d1",
                        "success": false,
                        "lastRunAt": "Tue Sep 23 1975 18:06:18 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e03f07bb970bd27798",
                        "success": false,
                        "lastRunAt": "Wed Mar 27 2019 06:59:50 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e0156f3d4262c9ddb8",
                        "success": false,
                        "lastRunAt": "Sat Mar 22 2014 22:51:37 GMT+0000 (UTC)",
                        "count": 20
                    },
                    {
                        "_id": "5df4b4e07dd2c1f308f3755d",
                        "success": true,
                        "lastRunAt": "Fri Apr 21 1972 07:17:10 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e0a7a65416ce0a708c",
                        "success": false,
                        "lastRunAt": "Fri Apr 14 2006 14:02:32 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e0f8355fdce4c0c106",
                        "success": false,
                        "lastRunAt": "Sat Jul 29 2017 19:46:07 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e0458821edd10ea9ff",
                        "success": true,
                        "lastRunAt": "Fri Jul 15 2011 04:23:35 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e0bd39deec16aa4875",
                        "success": false,
                        "lastRunAt": "Sun Oct 08 2017 00:26:41 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e038d120916ace3688",
                        "success": true,
                        "lastRunAt": "Fri Feb 26 2016 01:12:01 GMT+0000 (UTC)",
                        "count": 40
                    },
                    {
                        "_id": "5df4b4e04d0a5ca14963e73c",
                        "success": true,
                        "lastRunAt": "Sun May 08 2005 12:51:52 GMT+0000 (UTC)",
                        "count": 30
                    },
                    {
                        "_id": "5df4b4e0c4ab613fdc569149",
                        "success": true,
                        "lastRunAt": "Fri May 14 1976 08:41:39 GMT+0000 (UTC)",
                        "count": 21
                    },
                    {
                        "_id": "5df4b4e039ca5f618623c179",
                        "success": false,
                        "lastRunAt": "Fri Jan 30 1998 18:20:47 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e02f1a6813f45d35e9",
                        "success": true,
                        "lastRunAt": "Fri Dec 01 1978 12:12:31 GMT+0000 (UTC)",
                        "count": 34
                    },
                    {
                        "_id": "5df4b4e0d44f0cf5fb4db439",
                        "success": false,
                        "lastRunAt": "Thu May 08 1975 11:56:38 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e00bdf3a41848db801",
                        "success": true,
                        "lastRunAt": "Sun Aug 29 2010 11:25:52 GMT+0000 (UTC)",
                        "count": 20
                    },
                    {
                        "_id": "5df4b4e0db4a97efb2d20e83",
                        "success": false,
                        "lastRunAt": "Wed Mar 14 2018 21:19:05 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e09f1b26f63d67918e",
                        "success": false,
                        "lastRunAt": "Wed Aug 23 2006 07:53:43 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e00241eeeec2c4f266",
                        "success": true,
                        "lastRunAt": "Sun Mar 04 1973 11:24:13 GMT+0000 (UTC)",
                        "count": 27
                    },
                    {
                        "_id": "5df4b4e058d0d9daec8fc7c9",
                        "success": true,
                        "lastRunAt": "Mon Jul 22 2013 02:00:27 GMT+0000 (UTC)",
                        "count": 32
                    },
                    {
                        "_id": "5df4b4e0904d7267c292479f",
                        "success": false,
                        "lastRunAt": "Fri Aug 02 1974 05:31:23 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e0dd5e2fc6bbc88de7",
                        "success": true,
                        "lastRunAt": "Wed Jan 19 2005 23:42:47 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e08ab896b5db95d362",
                        "success": true,
                        "lastRunAt": "Fri Dec 22 2000 15:02:08 GMT+0000 (UTC)",
                        "count": 28
                    },
                    {
                        "_id": "5df4b4e0a172fd4cae542715",
                        "success": true,
                        "lastRunAt": "Wed Sep 21 2011 00:48:23 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e0da67f2b5de8deaeb",
                        "success": true,
                        "lastRunAt": "Tue Jan 18 1994 11:15:40 GMT+0000 (UTC)",
                        "count": 33
                    },
                    {
                        "_id": "5df4b4e094bab8e5be072f94",
                        "success": false,
                        "lastRunAt": "Fri Sep 13 2002 14:04:23 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e0949995a9a73ea4bc",
                        "success": false,
                        "lastRunAt": "Sat Dec 21 2002 20:43:25 GMT+0000 (UTC)",
                        "count": 40
                    },
                    {
                        "_id": "5df4b4e019fe9822d13f5fd0",
                        "success": false,
                        "lastRunAt": "Sun Mar 04 2001 18:43:30 GMT+0000 (UTC)",
                        "count": 40
                    },
                    {
                        "_id": "5df4b4e0a7299ef9bb72d2f5",
                        "success": true,
                        "lastRunAt": "Thu Mar 12 1987 08:58:42 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e094d11e2ca9c6df74",
                        "success": true,
                        "lastRunAt": "Fri Mar 31 2017 10:40:17 GMT+0000 (UTC)",
                        "count": 23
                    },
                    {
                        "_id": "5df4b4e0d488c37834e620c1",
                        "success": false,
                        "lastRunAt": "Sat Mar 01 2003 16:35:04 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e0df5a82554e24d79e",
                        "success": true,
                        "lastRunAt": "Tue Feb 28 2017 11:31:16 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e08a418387c69ab179",
                        "success": false,
                        "lastRunAt": "Thu Mar 10 1988 13:12:56 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e0e5250a0a344d8a78",
                        "success": false,
                        "lastRunAt": "Sat Oct 01 2011 23:56:27 GMT+0000 (UTC)",
                        "count": 33
                    },
                    {
                        "_id": "5df4b4e0cc035eb2fa3e4a1c",
                        "success": false,
                        "lastRunAt": "Mon Jan 18 2016 06:06:06 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e0ef29e38403ab4fcc",
                        "success": true,
                        "lastRunAt": "Mon Jul 08 2002 16:22:18 GMT+0000 (UTC)",
                        "count": 32
                    },
                    {
                        "_id": "5df4b4e09ce457c1f39b6f91",
                        "success": false,
                        "lastRunAt": "Fri Apr 03 2009 12:30:39 GMT+0000 (UTC)",
                        "count": 28
                    },
                    {
                        "_id": "5df4b4e081d652ac8c4f31de",
                        "success": false,
                        "lastRunAt": "Wed Jun 04 2008 20:23:57 GMT+0000 (UTC)",
                        "count": 29
                    },
                    {
                        "_id": "5df4b4e0ba91f01b1a20e93c",
                        "success": true,
                        "lastRunAt": "Tue Oct 03 2017 01:12:29 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e00868baaad76191f4",
                        "success": true,
                        "lastRunAt": "Sat Apr 01 1995 07:22:44 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e082d8495e40a92878",
                        "success": true,
                        "lastRunAt": "Mon Nov 17 1997 09:28:12 GMT+0000 (UTC)",
                        "count": 27
                    },
                    {
                        "_id": "5df4b4e0eb4c11f0d84e24bc",
                        "success": false,
                        "lastRunAt": "Mon Nov 24 1997 20:22:00 GMT+0000 (UTC)",
                        "count": 33
                    },
                    {
                        "_id": "5df4b4e0ca69f5cb5bf2989c",
                        "success": false,
                        "lastRunAt": "Tue Aug 29 1995 23:47:46 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e03ba7fc5a073f24e4",
                        "success": false,
                        "lastRunAt": "Mon Oct 08 2007 04:41:39 GMT+0000 (UTC)",
                        "count": 38
                    },
                    {
                        "_id": "5df4b4e0831156ff23f79732",
                        "success": true,
                        "lastRunAt": "Thu Dec 03 2015 16:13:20 GMT+0000 (UTC)",
                        "count": 33
                    },
                    {
                        "_id": "5df4b4e0c959f3497ddcfbd5",
                        "success": false,
                        "lastRunAt": "Sun Dec 25 1983 21:47:04 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e03751b7a3621e3ce7",
                        "success": false,
                        "lastRunAt": "Wed Feb 24 1993 00:16:23 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e06dc3a2027a8e07df",
                        "success": false,
                        "lastRunAt": "Thu Apr 04 1991 10:18:54 GMT+0000 (UTC)",
                        "count": 28
                    },
                    {
                        "_id": "5df4b4e03e9dff6d52e1d8ab",
                        "success": true,
                        "lastRunAt": "Sun Nov 08 1987 07:11:38 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e025c8465b802121ff",
                        "success": true,
                        "lastRunAt": "Tue Jun 23 2009 12:07:09 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e043cf79cb70869b7c",
                        "success": false,
                        "lastRunAt": "Sun Oct 27 2013 01:42:23 GMT+0000 (UTC)",
                        "count": 34
                    },
                    {
                        "_id": "5df4b4e00a3e7e82b02e59eb",
                        "success": false,
                        "lastRunAt": "Sat May 18 2013 16:34:28 GMT+0000 (UTC)",
                        "count": 21
                    },
                    {
                        "_id": "5df4b4e046954debbaea02b7",
                        "success": false,
                        "lastRunAt": "Fri Jun 16 2000 16:54:07 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e0da51515541e93e53",
                        "success": true,
                        "lastRunAt": "Wed Dec 11 2002 20:57:47 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e0b04ee91fce016a07",
                        "success": true,
                        "lastRunAt": "Fri Nov 11 1988 07:07:11 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e0adada7329ea11fee",
                        "success": true,
                        "lastRunAt": "Thu Oct 22 2015 14:56:56 GMT+0000 (UTC)",
                        "count": 30
                    },
                    {
                        "_id": "5df4b4e047a13915d33909c5",
                        "success": true,
                        "lastRunAt": "Fri Feb 08 1974 13:19:08 GMT+0000 (UTC)",
                        "count": 38
                    },
                    {
                        "_id": "5df4b4e023299a3a8a9ff4b8",
                        "success": true,
                        "lastRunAt": "Fri Dec 08 1995 10:22:10 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e0e61b1bf67b54fcfb",
                        "success": false,
                        "lastRunAt": "Wed Nov 14 1990 20:53:33 GMT+0000 (UTC)",
                        "count": 40
                    },
                    {
                        "_id": "5df4b4e0313a02c56acf65c3",
                        "success": false,
                        "lastRunAt": "Fri Aug 07 1992 06:02:58 GMT+0000 (UTC)",
                        "count": 22
                    },
                    {
                        "_id": "5df4b4e009223ac167a47050",
                        "success": false,
                        "lastRunAt": "Fri Dec 18 1970 04:11:29 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e05c3ae852b33c5964",
                        "success": false,
                        "lastRunAt": "Tue Feb 20 1973 15:43:49 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e0561caf2030bacbd1",
                        "success": true,
                        "lastRunAt": "Mon Jan 15 2018 08:57:50 GMT+0000 (UTC)",
                        "count": 28
                    },
                    {
                        "_id": "5df4b4e0622d304e4aeb3015",
                        "success": true,
                        "lastRunAt": "Wed Oct 20 1999 06:09:14 GMT+0000 (UTC)",
                        "count": 39
                    },
                    {
                        "_id": "5df4b4e067a96013efa78949",
                        "success": true,
                        "lastRunAt": "Tue Feb 24 2015 20:28:37 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e0162ee3c2986ad2a8",
                        "success": false,
                        "lastRunAt": "Wed Aug 11 1982 01:16:32 GMT+0000 (UTC)",
                        "count": 30
                    },
                    {
                        "_id": "5df4b4e001ab195a16ad7e83",
                        "success": false,
                        "lastRunAt": "Mon Mar 25 1996 10:12:48 GMT+0000 (UTC)",
                        "count": 33
                    },
                    {
                        "_id": "5df4b4e0b2f8d0a16ed7a809",
                        "success": true,
                        "lastRunAt": "Wed Sep 27 2000 13:43:39 GMT+0000 (UTC)",
                        "count": 35
                    },
                    {
                        "_id": "5df4b4e05878493baf7d0ffb",
                        "success": false,
                        "lastRunAt": "Tue Apr 03 1984 14:39:25 GMT+0000 (UTC)",
                        "count": 28
                    },
                    {
                        "_id": "5df4b4e08ed87c3bd41388f3",
                        "success": true,
                        "lastRunAt": "Fri Jan 14 2005 00:38:51 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e0f01068230d25fa94",
                        "success": true,
                        "lastRunAt": "Tue Jun 30 1981 01:53:28 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e0100cfeaeab501a99",
                        "success": false,
                        "lastRunAt": "Wed Aug 26 1970 00:19:42 GMT+0000 (UTC)",
                        "count": 24
                    },
                    {
                        "_id": "5df4b4e06fd61460a2ab5b92",
                        "success": false,
                        "lastRunAt": "Tue Mar 25 1975 14:41:26 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e0aa88d0e46560d12d",
                        "success": true,
                        "lastRunAt": "Fri Jan 18 1980 21:05:08 GMT+0000 (UTC)",
                        "count": 37
                    },
                    {
                        "_id": "5df4b4e085ef37e86905ce16",
                        "success": false,
                        "lastRunAt": "Tue Feb 27 1979 16:33:54 GMT+0000 (UTC)",
                        "count": 25
                    },
                    {
                        "_id": "5df4b4e0dde1c3dbc944266a",
                        "success": true,
                        "lastRunAt": "Fri Sep 01 1995 13:00:03 GMT+0000 (UTC)",
                        "count": 38
                    },
                    {
                        "_id": "5df4b4e03c6a89aee82bcc98",
                        "success": false,
                        "lastRunAt": "Tue May 17 1988 09:13:31 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e0b8d95145c08a7bbb",
                        "success": false,
                        "lastRunAt": "Sun Aug 24 1975 03:06:39 GMT+0000 (UTC)",
                        "count": 28
                    },
                    {
                        "_id": "5df4b4e0f97b172823e4921c",
                        "success": true,
                        "lastRunAt": "Sun Oct 26 2003 07:42:48 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e069e1014daf56e37a",
                        "success": false,
                        "lastRunAt": "Fri Oct 26 1979 07:59:59 GMT+0000 (UTC)",
                        "count": 33
                    },
                    {
                        "_id": "5df4b4e02448fe7546325b3f",
                        "success": true,
                        "lastRunAt": "Sat Dec 02 2017 07:59:00 GMT+0000 (UTC)",
                        "count": 21
                    },
                    {
                        "_id": "5df4b4e08f4f2dbf6b32f65c",
                        "success": false,
                        "lastRunAt": "Wed Dec 15 2010 15:57:30 GMT+0000 (UTC)",
                        "count": 31
                    },
                    {
                        "_id": "5df4b4e05d85590b146a126f",
                        "success": false,
                        "lastRunAt": "Wed Oct 02 2013 22:56:53 GMT+0000 (UTC)",
                        "count": 27
                    },
                    {
                        "_id": "5df4b4e0433acf8a35de6507",
                        "success": false,
                        "lastRunAt": "Wed Nov 29 2006 16:53:04 GMT+0000 (UTC)",
                        "count": 36
                    },
                    {
                        "_id": "5df4b4e0ca5bc02ee92e1555",
                        "success": true,
                        "lastRunAt": "Sun Nov 02 2014 03:58:56 GMT+0000 (UTC)",
                        "count": 21
                    }

                ]
            }
        },
        components: {
            Navbar
        },
        methods: {
            rand() {
                return Math.floor(Math.random() * 100)
            },
            getFormattedDate(date) {
                let d = new Date(date);
                return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            }
        }
    }
</script>
