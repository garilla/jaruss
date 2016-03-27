using Microsoft.AspNet.Mvc;

namespace jaruss.Controllers
{
    public class ErrorController : Controller
    {
        public IActionResult PageNotFound()
        {
            return View();
        }
    }
}
