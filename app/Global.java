import com.google.inject.Guice;
import com.google.inject.Injector;
import play.Application;
import play.GlobalSettings;


public class Global extends GlobalSettings
{
    private Injector injector;

    @Override
    public void onStart(Application application)
    {
        super.onStart(application);

        injector = Guice.createInjector(new ProjectModule());
    }
}
