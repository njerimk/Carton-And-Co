# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Comic.destroy_all
ComicPage.destroy_all
Like.destroy_all
UserComic.destroy_all
Comment.destroy_all

usernames = ["artrules", "lovelylace", "rosemary", "stringsoftwine"]
comic_names = ["lovelybones", "loveless", "simple_method", "lovingly_plain"]
comic_page_names = ["the beginning", "lovely end", "at least we tried-chapter 2", "fingers locked", "busted ends"]
descriptions = ["this was a great beginning, can't wait for the end", "didn't they almost have it all?", "art is on point, don't stop!", "sometimes a little love is all you need"]
likes = [1,2,3,4]


user_1 = User.create(user_name: usernames.sample(), user_desc: descriptions.sample(), image_url:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
user_2 = User.create(user_name: usernames.sample(), user_desc: descriptions.sample(), image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTvi7T9WHhXX1p0PNwEGMdoiyg0F9A5lgsQ&usqp=CAU")
user_3 = User.create(user_name: usernames.sample(), user_desc: descriptions.sample(), image_url: "https://cachedimages.podchaser.com/512x512/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tLzAxYTU3ZjM3ZjAzYjQyZGVmOWUzNDFmNDk3YTY2NjRjLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D")


comic_1 = Comic.create(title: comic_names.sample(), comic_desc: descriptions.sample(), image_url: "https://www.scifinow.co.uk/wp-content/uploads/2017/11/what-is-left-cover.jpg")
comic_2 = Comic.create(title: comic_names.sample(), comic_desc: descriptions.sample(), image_url:"https://lillianportfoliomay.weebly.com/uploads/9/0/5/5/90554509/download-3_orig.png")
comic_3 = Comic.create(title: comic_names.sample(), comic_desc: descriptions.sample(), image_url: "https://images.squarespace-cdn.com/content/v1/560c61bce4b05c07fc30b40d/1573230377509-BEZVP2JHIM2UHPYRYTF0/ke17ZwdGBToddI8pDm48kEnX-QEuM9piDOLTEgdIb_N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbgRWu4nDDJYe-3kPie-8CAGM-433BK3_94j_zVi4IAfOno-kJk2kRFa0i0GlSZ-nQ/LauraDean_14a+postable.jpg?format=500w", bg_image_url:"https://static.hollywoodreporter.com/sites/default/files/2020/03/dont0-h_2020-928x523.jpg")
comic_4 = Comic.create(title: comic_names.sample(), comic_desc: descriptions.sample(), image_url: "https://mcad.edu/sites/default/files/profiles/Sycorax%20print%20file.png", bg_image_url: "https://www.previewsworld.com/SiteImage/MainImage/STL168406.jpg")


comic_page1 = ComicPage.create(page_name: comic_page_names.sample(), page_desc: descriptions.sample(), comic_id: comic_1.id, image_url: "https://static.hollywoodreporter.com/sites/default/files/2020/03/dont4-embed_2020-compressed.jpg" )
comic_page2 = ComicPage.create(page_name: comic_page_names.sample(), page_desc: descriptions.sample(), comic_id: comic_3.id, image_url: "https://sequentialstate.com/wp-content/uploads/2017/12/What-is-Left-3.png" )
comic_page3 = ComicPage.create(page_name: comic_page_names.sample(), page_desc: descriptions.sample(), comic_id: comic_2.id, image_url: "https://i.pinimg.com/736x/e8/5e/6b/e85e6b358b2d0ee95b75d3cf66af9693--comic-manga-comic-illustrations.jpg" )

Like.create(likeable: user_2)
Like.create(likeable: comic_2)
Like.create(likeable: user_3)
Like.create(likeable: comic_1)
Like.create(likeable: comic_page3)



UserComic.create(user_id: user_2.id, comic_id: comic_2.id)
UserComic.create(user_id: user_3.id, comic_id: comic_3.id)
UserComic.create(user_id: user_1.id, comic_id: comic_1.id)

Comment.create(commentable: comic_page3, content: descriptions.sample(), user_id: user_1.id)
Comment.create(commentable: comic_page2, content: descriptions.sample(), user_id: user_2.id)

Comment.create(commentable: comic_page1, content: descriptions.sample(), user_id: user_3.id)
Comment.create(commentable: comic_page1, content: descriptions.sample(), user_id: user_3.id)

#   Character.create(name: 'Luke', movie: movies.first)
