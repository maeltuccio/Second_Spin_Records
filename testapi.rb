DISCOGS_API_KEY = 'JJniAOLkkNFxxppmWOXt'
DISCOGS_API_URL = 'https://api.discogs.com'

# auth_url = GET https://api.discogs.com/oauth/request_token

include 'httparty'

response = HTTParty.get('https://api.discogs.com/oauth/request_token', {
  headers: {
    'Content-Type' => 'application/x-www-form-urlencoded',
    'Authorization' => 'OAuth oauth_consumer_key="JJniAOLkkNFxxppmWOXt", oauth_nonce="random_string_or_timestamp", oauth_signature="ppRuqMzYHUkTYOUAsfYmSCRybDWRUKNZ&", oauth_signature_method="PLAINTEXT", oauth_timestamp="current_timestamp", oauth_callback="your_callback"'
  }
})
puts response.body


# HTTParty.GET('https://api.discogs.com/oauth/request_token', { query: {
#   Content-Type: application/x-www-form-urlencoded;
#   Authorization: {
#       OAuth oauth_consumer_key="JJniAOLkkNFxxppmWOXt",
#         oauth_nonce="random_string_or_timestamp",
#         oauth_signature="ppRuqMzYHUkTYOUAsfYmSCRybDWRUKNZ&",
#         oauth_signature_method="PLAINTEXT",
#         oauth_timestamp="current_timestamp",
#         oauth_callback="your_callback"}
# } })

  # GET https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=3&page=1

  url = "https://api.discogs.com/database/search?artist=Nirvana&type=release&key=JJniAOLkkNFxxppmWOXt"
