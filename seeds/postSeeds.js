const { Post } = require("../models");

const postData = [
  {
    postTitle: "Lorem ipsum1",
    postContents: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor. Volutpat consequat mauris nunc congue nisi vitae suscipit. Ac placerat vestibulum lectus mauris ultrices. Sit amet venenatis urna cursus. Sed tempus urna et pharetra pharetra. Arcu risus quis varius quam quisque id diam vel quam. Arcu bibendum at varius vel pharetra. Aliquet nibh praesent tristique magna sit. Ac tortor dignissim convallis aenean et. Sed libero enim sed faucibus turpis in eu mi bibendum. Enim facilisis gravida neque convallis a cras semper auctor neque. Ultrices sagittis orci a scelerisque purus. Lacus vel facilisis volutpat est velit egestas dui id ornare. Purus sit amet luctus venenatis lectus.    `,
    user_id: 1,
  },
  {
    postTitle: "Lorem ipsum2",
    postContents: `At augue eget arcu dictum varius duis at consectetur. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Neque gravida in fermentum et sollicitudin ac orci. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Ut enim blandit volutpat maecenas volutpat blandit. Facilisi nullam vehicula ipsum a arcu cursus. Facilisis leo vel fringilla est ullamcorper eget nulla. Ac felis donec et odio. Id donec ultrices tincidunt arcu non sodales neque. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Vitae turpis massa sed elementum tempus egestas sed sed. Diam sollicitudin tempor id eu nisl. Vitae turpis massa sed elementum tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Curabitur vitae nunc sed velit dignissim. Fermentum et sollicitudin ac orci. Sit amet dictum sit amet justo donec. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod.`,
    user_id: 1,
  },
  {
    postTitle: "Lorem ipsum3",
    postContents: `Auctor elit sed vulputate mi. Vitae nunc sed velit dignissim sodales ut eu sem. Morbi enim nunc faucibus a pellentesque sit amet. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Amet consectetur adipiscing elit ut aliquam purus sit. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ultricies mi eget mauris pharetra. Augue eget arcu dictum varius duis at. Sit amet mauris commodo quis imperdiet. Etiam sit amet nisl purus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Amet nisl purus in mollis nunc sed. Lorem dolor sed viverra ipsum. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Purus ut faucibus pulvinar elementum integer enim. A iaculis at erat pellentesque adipiscing.`,
    user_id: 2,
  },
  {
    postTitle: "Lorem ipsum4",
    postContents: `Iaculis eu non diam phasellus. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Suspendisse interdum consectetur libero id faucibus nisl. Nisl nisi scelerisque eu ultrices vitae auctor. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Arcu ac tortor dignissim convallis aenean et. A iaculis at erat pellentesque adipiscing. In est ante in nibh mauris cursus mattis molestie. Leo urna molestie at elementum eu facilisis sed odio morbi. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Pretium lectus quam id leo in vitae turpis massa. Odio euismod lacinia at quis risus sed. Pharetra convallis posuere morbi leo urna molestie at.`,
    user_id: 3,
  },
  {
    postTitle: "Lorem ipsum5",
    postContents: `Varius sit amet mattis vulputate. Nullam non nisi est sit amet facilisis magna etiam tempor. Quisque egestas diam in arcu cursus euismod quis viverra. Condimentum vitae sapien pellentesque habitant morbi. Est pellentesque elit ullamcorper dignissim. Lobortis feugiat vivamus at augue eget arcu dictum varius. Et magnis dis parturient montes nascetur ridiculus mus. Duis tristique sollicitudin nibh sit. Scelerisque fermentum dui faucibus in. Enim diam vulputate ut pharetra sit amet. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Semper quis lectus nulla at. Pellentesque nec nam aliquam sem et tortor consequat id porta.`,
    user_id: 4,
  },
  {
    postTitle: "Lorem ipsum6",
    postContents: `Ultrices tincidunt arcu non sodales. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Nam aliquam sem et tortor consequat. Libero id faucibus nisl tincidunt eget nullam non nisi est. Sagittis eu volutpat odio facilisis mauris sit amet massa. Eget gravida cum sociis natoque. Porta non pulvinar neque laoreet suspendisse interdum. Tellus cras adipiscing enim eu turpis egestas pretium. Morbi leo urna molestie at elementum eu facilisis. Molestie ac feugiat sed lectus vestibulum mattis. Lorem donec massa sapien faucibus et molestie. Sit amet commodo nulla facilisi nullam vehicula.`,
    user_id: 5,
  },
  {
    postTitle: "Lorem ipsum7",
    postContents: `Senectus et netus et malesuada fames ac turpis. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Sit amet justo donec enim diam vulputate. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Nisl condimentum id venenatis a condimentum vitae sapien. Mauris cursus mattis molestie a iaculis at. Amet cursus sit amet dictum sit. Imperdiet dui accumsan sit amet nulla facilisi morbi. Diam vulputate ut pharetra sit amet aliquam id diam. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sodales ut etiam sit amet nisl purus in mollis. Fermentum posuere urna nec tincidunt praesent semper. Auctor urna nunc id cursus.`,
    user_id: 5,
  },
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;
