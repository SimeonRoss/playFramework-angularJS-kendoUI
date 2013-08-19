import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "angular-play-example"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    javaCore,
    javaJdbc,
    javaEbean,
    "springframework" % "spring-beans" % "1.2.6",
    "com.google.inject" % "guice" % "3.0"
  )

  val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here
  )

}
