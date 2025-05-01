from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('activities/', views.UserActivityList.as_view(), name='user-activities'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] 