require "test_helper"

class WishlistsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get wishlists_show_url
    assert_response :success
  end

  test "should get create" do
    get wishlists_create_url
    assert_response :success
  end
end
