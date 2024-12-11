# DISCOGS_API_KEY = 'JJniAOLkkNFxxppmWOXt'
# DISCOGS_API_URL = 'https://api.discogs.com'

# # auth_url = GET https://api.discogs.com/oauth/request_token

# include 'httparty'

# response = HTTParty.get('https://api.discogs.com/oauth/request_token', {
#   headers: {
#     'Content-Type' => 'application/x-www-form-urlencoded',
#     'Authorization' => 'OAuth oauth_consumer_key="JJniAOLkkNFxxppmWOXt", oauth_nonce="random_string_or_timestamp", oauth_signature="ppRuqMzYHUkTYOUAsfYmSCRybDWRUKNZ&", oauth_signature_method="PLAINTEXT", oauth_timestamp="current_timestamp", oauth_callback="your_callback"'
#   }
# })
# puts response.body


# # HTTParty.GET('https://api.discogs.com/oauth/request_token', { query: {
# #   Content-Type: application/x-www-form-urlencoded;
# #   Authorization: {
# #       OAuth oauth_consumer_key="JJniAOLkkNFxxppmWOXt",
# #         oauth_nonce="random_string_or_timestamp",
# #         oauth_signature="ppRuqMzYHUkTYOUAsfYmSCRybDWRUKNZ&",
# #         oauth_signature_method="PLAINTEXT",
# #         oauth_timestamp="current_timestamp",
# #         oauth_callback="your_callback"}
# # } })

#   # GET https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=3&page=1

#   url = "https://api.discogs.com/database/search?artist=Nirvana&type=release&key=JJniAOLkkNFxxppmWOXt"

require "discogs"

wrapper = Discogs::Wrapper.new("SecondSpin")

artist          = wrapper.get_artist("329937")
artist_releases = wrapper.get_artist_releases("329937")
release         = wrapper.get_release("1529724")
label           = wrapper.get_label("29515")

# You must be authenticated in order to search. I provide a few ways to do this. See the AUTHENTICATION section below.
auth_wrapper = Discogs::Wrapper.new("SecondSpin", user_token: "JJniAOLkkNFxxppmWOXt")
search       = auth_wrapper.search("Necrovore", :per_page => 10, :type => :artist)

artist.name                          # => "Manilla Road"
artist.members.count                 # => 4
artist.members.first.name            # => "Mark Shelton"
artist.profile                       # => "Heavy Metal band from ..."

artist_releases.releases.count       # => 35
artist_releases.releases.first.title # => "Invasion"

release.title                        # => "Medieval"
release.labels.first.name            # => "New Renaissance Records"
release.formats[0].descriptions[0]   # => "12\""
release.styles                       # => [ "Heavy Metal", "Doom Metal" ]
release.tracklist[1].title           # => "Death is Beauty"

label.name                           # => "Monitor (2)"
label.sublabels.count                # => 3

search.pagination.items              # => 2
search.results.first.title           # => "Necrovore"
search.results.first.type            # => "artist"
search.results.first.id              # => 691078
