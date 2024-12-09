require "test_helper"

class DiscsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get discs_index_url
    assert_response :success
  end

  test "should get show" do
    get discs_show_url
    assert_response :success
  end

  test "should get create" do
    get discs_create_url
    assert_response :success
  end
  test "should get update" do
    get discs_update_url
    assert_response :success
  end

  test "should get new" do
    get discs_new_url
    assert_response :success
  end

  test "should get create" do
    get discs_create_url
    assert_response :success
  end
end
