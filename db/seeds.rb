# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Track.destroy_all
Wishlist.destroy_all
Collection.destroy_all
Comment.destroy_all
Disc.destroy_all
disc1 = Disc.create!(title: "Blue Electric Light", artist: "Lenny Kravitz", genre: "rock", suggested_price: 19.99, label: "Virgin Records", release_date: "2023-10-15", cat_number: "VEL-1234")
disc2 = Disc.create!(title: "Echoes of the Soul", artist: "Norah Jones", genre: "jazz", suggested_price: 24.99, label: "Blue Note", release_date: "2020-04-23", cat_number: "BLU-5678")
disc3 = Disc.create!(title: "Synth Horizons", artist: "Daft Punk", genre: "electronic", suggested_price: 29.99, label: "Columbia", release_date: "2013-07-12", cat_number: "CLB-9101")
disc4 = Disc.create!(title: "Acoustic Dreams", artist: "Ed Sheeran", genre: "pop", suggested_price: 15.49, label: "Atlantic Records", release_date: "2021-11-05", cat_number: "ATL-1123")
# Disc.create!(title: "Metal Requiem", artist: "Metallica", genre: "metal", suggested_price: 34.99, label: "Elektra", release_date: "2008-09-20", cat_number: "ELK-4456")
# Disc.create!(title: "Reggae Nights", artist: "Bob Marley", genre: "reggae", suggested_price: 18.75, label: "Tuff Gong", release_date: "1980-06-01", cat_number: "TG-7789")
# Disc.create!(title: "Piano Serenades", artist: "Ludovico Einaudi", genre: "classical", suggested_price: 22.99, label: "Decca", release_date: "2017-02-15", cat_number: "DEC-3334")
# Disc.create!(title: "Electric Avenue", artist: "Eddy Grant", genre: "pop", suggested_price: 12.49, label: "Ice Records", release_date: "1982-03-12", cat_number: "ICE-5567")
# Disc.create!(title: "Moody Blues", artist: "The Moody Blues", genre: "blues", suggested_price: 25.99, label: "Deram Records", release_date: "1973-10-05", cat_number: "DRM-7890")
# Disc.create!(title: "Hip-Hop Revolution", artist: "Kendrick Lamar", genre: "hip-hop", suggested_price: 27.99, label: "Top Dawg", release_date: "2015-05-19", cat_number: "TDG-6543")

Track.create!(name: "Electric Vibe", duration: 4.3, disc_id: disc1.id)
Track.create!(name: "Neon Dream", duration: 5.1, disc_id: disc1.id)
Track.create!(name: "Midnight Groove", duration: 4.8, disc_id: disc1.id)

Track.create!(name: "Whispers in the Wind", duration: 5.2, disc_id: disc2.id)
Track.create!(name: "Soulful Journey", duration: 6.0, disc_id: disc2.id)
Track.create!(name: "Serenade of Time", duration: 4.7, disc_id: disc2.id)

Track.create!(name: "Digital Love", duration: 5.3, disc_id: disc3.id)
Track.create!(name: "One More Time", duration: 5.5, disc_id: disc3.id)
Track.create!(name: "Harder, Better, Faster, Stronger", duration: 3.8, disc_id: disc3.id)

Track.create!(name: "Shape of You", duration: 4.0, disc_id: disc4.id);
Track.create!(name: "Perfect", duration: 4.5, disc_id: disc4.id);
Track.create!(name: "Castle on the Hill", duration: 4.3, disc_id: disc4.id)
